import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, GenerateVideosOperation } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '60mb' }));
app.use(express.urlencoded({ extended: true, limit: '60mb' }));

// Helper to get GoogleGenAI client
function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// 1. Generate High-Quality Images (gemini-3-pro-image-preview) with 1K, 2K, 4K affordance
app.post('/api/generate-image', async (req, res) => {
  try {
    const { prompt, imageSize = '1K', aspectRatio = '9:16' } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const ai = getGenAI();
    if (!ai) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured on the server.',
      });
    }

    // Call gemini-3-pro-image-preview
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio || '9:16',
          imageSize: imageSize || '1K',
        },
      },
    });

    let imageUrl: string | null = null;
    let descriptionText = '';

    const candidates = response.candidates;
    if (candidates && candidates.length > 0 && candidates[0].content?.parts) {
      for (const part of candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          const mimeType = part.inlineData.mimeType || 'image/png';
          imageUrl = `data:${mimeType};base64,${part.inlineData.data}`;
        } else if (part.text) {
          descriptionText += part.text;
        }
      }
    }

    if (!imageUrl) {
      return res.status(500).json({
        error: 'No image data returned from model.',
        details: descriptionText,
      });
    }

    return res.json({
      imageUrl,
      description: descriptionText,
      imageSize,
      aspectRatio,
    });
  } catch (err: any) {
    console.error('Image generation error:', err);
    return res.status(500).json({
      error: err.message || 'Failed to generate image',
    });
  }
});

// 2. Animate photo into video using veo-3.1-fast-generate-preview (16:9 or 9:16)
app.post('/api/generate-video', async (req, res) => {
  try {
    const {
      prompt = 'Cinematic smooth 360 showcase rotation of the custom laminated phone under studio lighting',
      imageBase64,
      mimeType = 'image/png',
      aspectRatio = '9:16', // '16:9' or '9:16'
      resolution = '720p',
    } = req.body;

    const ai = getGenAI();
    if (!ai) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured on the server.',
      });
    }

    const videoConfig: any = {
      numberOfVideos: 1,
      aspectRatio: aspectRatio === '16:9' ? '16:9' : '9:16',
      resolution: resolution === '1080p' ? '1080p' : '720p',
    };

    const requestPayload: any = {
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt || 'Showcase of luxury mobile skin and wrap',
      config: videoConfig,
    };

    if (imageBase64) {
      // Clean base64 if it has data url header
      const cleaned = imageBase64.replace(/^data:image\/[a-zA-Z]+;base64,/, '');
      requestPayload.image = {
        imageBytes: cleaned,
        mimeType: mimeType || 'image/png',
      };
    }

    const operation = await ai.models.generateVideos(requestPayload);

    return res.json({
      operationName: operation.name,
      message: 'Video generation started',
    });
  } catch (err: any) {
    console.error('Video generation start error:', err);
    return res.status(500).json({
      error: err.message || 'Failed to start video generation',
    });
  }
});

// 3. Poll video operation status
app.post('/api/video-status', async (req, res) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      return res.status(400).json({ error: 'operationName is required' });
    }

    const ai = getGenAI();
    if (!ai) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is missing' });
    }

    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });

    const isDone = Boolean(updated.done);
    const downloadUri =
      updated.response?.generatedVideos?.[0]?.video?.uri || null;

    return res.json({
      done: isDone,
      downloadUri,
      error: updated.error || null,
    });
  } catch (err: any) {
    console.error('Video status error:', err);
    return res.status(500).json({ error: err.message || 'Failed to check status' });
  }
});

// 4. Download / stream the generated video safely
app.post('/api/video-download', async (req, res) => {
  try {
    const { operationName } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;
    if (!operationName || !apiKey) {
      return res.status(400).json({ error: 'Invalid request or missing key' });
    }

    const ai = getGenAI();
    if (!ai) {
      return res.status(500).json({ error: 'No AI instance' });
    }

    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });
    const uri = updated.response?.generatedVideos?.[0]?.video?.uri;

    if (!uri) {
      return res.status(404).json({ error: 'Video URI not found or video not ready' });
    }

    const videoRes = await fetch(uri, {
      headers: { 'x-goog-api-key': apiKey },
    });

    if (!videoRes.ok) {
      return res.status(videoRes.status).json({ error: 'Failed to fetch video stream' });
    }

    res.setHeader('Content-Type', 'video/mp4');
    const arrayBuffer = await videoRes.arrayBuffer();
    return res.send(Buffer.from(arrayBuffer));
  } catch (err: any) {
    console.error('Video download error:', err);
    return res.status(500).json({ error: err.message || 'Failed to download video' });
  }
});

// Start server with Vite middleware in dev or static files in prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        port: PORT,
        host: '0.0.0.0',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Gadaliya Mobile server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
