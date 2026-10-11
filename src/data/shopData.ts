import { SkinPhotoItem, RepairService } from '../types';
import krishnaSmileImg from '../assets/images/krishna_smile_skin_1791717037114.jpg';
import porscheGt3Img from '../assets/images/porsche_gt3_skin_1791717052065.jpg';
import royalTigerImg from '../assets/images/royal_tiger_skin_1791717066311.jpg';
import balKrishnaImg from '../assets/images/bal_krishna_skin_1791717077178.jpg';
import royalHorseImg from '../assets/images/royal_horse_skin_1791717122776.jpg';
import neonBikerImg from '../assets/images/neon_biker_skin_1791717144638.jpg';
import stealthHoneycombImg from '../assets/images/stealth_honeycomb_skin_1791717157833.jpg';
import travelWanderlustImg from '../assets/images/travel_wanderlust_skin_1791717169094.jpg';

export const SHOP_INFO = {
  name: 'Gadaliya Mobile',
  brandName: 'GadaliyaMobile',
  owner: 'Prakash Gadaliya',
  tagline: 'Mobile Phone Accessories, Lamination & Repairing Shop • Visnagar',
  phoneRaw: '9173309034',
  phoneFormatted: '+91 91733 09034',
  phoneDial: '+919173309034',
  instagramHandle: '@gadaliya_mobile_skin',
  instagramUrl: 'https://instagram.com/gadaliya_mobile_skin',
  shopNumber: 'Shop No. 12, Main Market, Visnagar',
  address: 'Gujarat - 384315 • Run by Prakash Gadaliya',
  fullAddress: 'Gate No-2 Ganj Bazar, Opp.Nagori Market, Visnagar, Gujarat, 384315',
  city: 'Visnagar, Gujarat',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gadaliya+Mobile+Shop+No+12+Main+Market+Visnagar+Gujarat+384315',
  hoursWeekday: '9:30 AM – 8:30 PM',
  hoursSunday: '10:00 AM – 6:00 PM',
  rating: '4.9 / 5',
  reviewCount: '120+ Google reviews',
  skinBasePrice: 150,
  skinShippingCharge: 50,
  walkinNotice: 'Walk-ins welcome anytime!',
  whatsappUrl: (msg?: string) => {
    const text = msg
      ? encodeURIComponent(msg)
      : encodeURIComponent('Hello Prakash bhai, I want to inquire about mobile skins, lamination, and repairing at Gadaliya Mobile Visnagar.');
    return `https://wa.me/919173309034?text=${text}`;
  },
};

export interface ShopOffering {
  id: string;
  title: string;
  titleGu?: string;
  category: string;
  descriptionEn: string;
  descriptionGu: string;
  badge?: string;
  iconName: string;
  imageUrl: string;
}

// 5 core services (Online Services & Recharge removed as requested)
export const SHOP_OFFERINGS: ShopOffering[] = [
  {
    id: 'accessories',
    title: 'Mobile Accessories',
    titleGu: 'મોબાઈલ એક્સેસરીઝ',
    category: 'Accessories',
    badge: 'Latest Collection',
    descriptionEn: 'Wide variety of designer cases, tough covers, 9H tempered glasses, fast chargers, USB-C cables, TWS earphones, and power banks for all smartphone brands.',
    descriptionGu: 'અમારા "Gadaliya Mobile" પર તમને દરેક બ્રાન્ડના મોબાઈલ માટે લેટેસ્ટ અને ટ્રેન્ડી એક્સેસરીઝ મળશે! કવર, સ્ક્રીન પ્રોટેક્ટર, હેડફોન, ચાર્જર, પાવર બેંક - બધું જ અહીં ઉપલબ્ધ છે.',
    iconName: 'Headphones',
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'lamination',
    title: 'Mobile Lamination & Skins',
    titleGu: 'મોબાઈલ લેમિનેશન વર્ક',
    category: 'Lamination',
    badge: '₹150 Only',
    descriptionEn: '360° scratch-proof hydrogel lamination, custom devotional, automotive, anime, and 3D textured skins. Laser precision cutting for all models.',
    descriptionGu: 'અમારા ત્યાં તમામ સ્માર્ટફોન માટે માત્ર ₹150 માં પ્રીમિયમ લેમિનેશન સ્કિન ઉપલબ્ધ છે! ઉચ્ચ ગુણવત્તાવાળા મટિરિયલથી તમારા ફોનને સ્ક્રેચથી બચાવો.',
    iconName: 'Shield',
    imageUrl: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'repairing',
    title: 'Mobile Repairing',
    titleGu: 'મોબાઈલ રિપેરિંગ સેવા',
    category: 'Repairing',
    badge: 'Same-Day Service',
    descriptionEn: 'Expert repair for cracked AMOLED/OLED screens, fast battery replacement, loose charging ports, water damage cleaning, and motherboard IC micro-soldering.',
    descriptionGu: 'દરેક બ્રાન્ડના ફોનના ડિસ્પ્લે, બેટરી, ચાર્જિંગ સોકેટ અને મધરબોર્ડ આઈસી રિપેરિંગ. સાચા સ્પેરપાર્ટ્સ અને વોરંટી સાથે ઝડપી સર્વિસ!',
    iconName: 'Wrench',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'tempered-glass',
    title: 'Screen Protectors & Guards',
    titleGu: 'ટેમ્પર્ડ ગ્લાસ અને કેમેરા ગાર્ડ',
    category: 'Protection',
    badge: '9H Hardness',
    descriptionEn: 'Curved UV edge-to-edge tempered glass, matte gaming guards, privacy filters, and sapphire camera lens protector rings.',
    descriptionGu: 'કર્વ્ડ યુવી ગ્લાસ, ગેમિંગ મેટ ગ્લાસ અને કેમેરા પ્રોટેક્ટર રિંગ્સ જે તમારા કેમેરા અને ડિસ્પ્લેને ફૂટવાથી બચાવે છે.',
    iconName: 'Smartphone',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'audio-gadgets',
    title: 'Audio Gadgets & Earphones',
    titleGu: 'ઈયરફોન અને સાઉન્ડ ગેજેટ્સ',
    category: 'Accessories',
    badge: 'High Bass & Warranty',
    descriptionEn: 'High-bass wired earphones, wireless Bluetooth neckbands, TWS earbuds with noise cancellation, and portable mini speakers.',
    descriptionGu: 'શ્રેષ્ઠ સાઉન્ડ ક્વોલિટી અને બાસ સાથે બ્રાન્ડેડ હેડફોન, નેકબેન્ડ અને TWS ઇયરબડ્સ વ્યાજબી ભાવે મેળવો.',
    iconName: 'Speaker',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80',
  },
];

// Real Shop Skin Photos - All at ₹150 (+₹50 shipping if ordered online)
export const PHOTO_SKINS: SkinPhotoItem[] = [
  {
    id: 'krishna-smile',
    name: 'Lord Krishna "Happy Things" Edition',
    nameGu: 'શ્રી કૃષ્ણ ભક્તિ સ્કિન',
    category: 'Devotional & Spiritual',
    imageUrl: krishnaSmileImg || '/skins/krishna_smile.jpg',
    description: 'Divine smiling Lord Krishna with peacock feather, sun doodle, and golden embellishments on rich matte black finish.',
    badge: 'Best Seller',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'bal-krishna',
    name: 'Little Bal Gopal with Sacred Calves',
    nameGu: 'બાલ ગોપાલ ગૌમાતા સ્કિન',
    category: 'Devotional & Spiritual',
    imageUrl: balKrishnaImg || '/skins/bal_krishna.jpg',
    description: 'Adorable Little Bal Krishna with peacock feather seated on blooming green meadow surrounded by loving white calves.',
    badge: 'Customer Favorite',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'royal-tiger',
    name: 'Royal Bengal Tiger Titanium Wrap',
    nameGu: 'રોયલ ટાઇગર એડિશન',
    category: 'Wildlife & Royalty',
    imageUrl: royalTigerImg || '/skins/royal_tiger.jpg',
    description: 'Fierce Bengal Tiger illustration with vibrant amber eyes and intense detailing over brushed titanium texture.',
    badge: 'High Detail',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'royal-horse',
    name: 'Traditional Royal Marwari Ashwa Horse',
    nameGu: 'રોયલ મારવાડી અશ્વ સ્કિન',
    category: 'Heritage & Traditional',
    imageUrl: royalHorseImg || '/skins/royal_horse.jpg',
    description: 'Majestic black stallion adorned in rich traditional Indian royal embroidery saddle, jewels, and gold filigree on pearl white.',
    badge: 'Royal Heritage',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'porsche-gt3',
    name: 'Porsche 911 GT3 Blueprint Racing',
    nameGu: 'પોર્શ જીટી૩ રેસિંગ સ્કિન',
    category: 'Supercars & Racing',
    imageUrl: porscheGt3Img || '/skins/porsche_gt3.jpg',
    description: 'Technical aerodynamic schematic blueprint of the Porsche 911 GT3 with dual-tone white & dark racing gray finish.',
    badge: 'Trending',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'neon-biker',
    name: 'Neon Superbike Racer In Rain',
    nameGu: 'નિયોન બાઈકર રેસર સ્કિન',
    category: 'Superbikes & Moto',
    imageUrl: neonBikerImg || '/skins/neon_biker.jpg',
    description: 'Cinematic superbike motorcycle racer in rain with glowing neon red LED lights and track reflections on orange titanium.',
    badge: 'Gamer & Moto',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'stealth-honeycomb',
    name: '3D Hexagonal Honeycomb Matrix',
    nameGu: 'સ્ટીલ્થ હનીકોમ્બ મેટ્રિક્સ',
    category: '3D Geometric & Texture',
    imageUrl: stealthHoneycombImg || '/skins/stealth_honeycomb.jpg',
    description: 'Precision tactile 3D hexagonal honeycomb matrix in matte stealth black. Zero fingerprints with ultra-grippy feel.',
    badge: 'Extreme Grip',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'travel-wanderlust',
    name: 'Vintage World Map Wanderlust Traveler',
    nameGu: 'ટ્રાવેલ વાંડરલસ્ટ સ્કિન',
    category: 'Travel & Lifestyle',
    imageUrl: travelWanderlustImg || '/skins/travel_wanderlust.jpg',
    description: 'Vintage antique world map with airplane, passport stamps, compass, and travel stickers on deep twilight purple.',
    badge: 'Wanderlust',
    price: 150,
    shippingFee: 50,
  },
];

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: 'screen-replacement',
    title: 'AMOLED & Display Replacement',
    description: 'Crisp color restoration with original 120Hz refresh rate and responsive touch digitizer.',
    timeEstimate: '30 - 45 mins',
    warranty: '3 Months Warranty',
    startingPrice: 1200,
    iconName: 'Smartphone',
  },
  {
    id: 'battery-replacement',
    title: 'High-Capacity Battery Replacement',
    description: 'Restore all-day endurance with genuine certified battery cells and health calibration.',
    timeEstimate: '20 - 30 mins',
    warranty: '6 Months Warranty',
    startingPrice: 650,
    iconName: 'BatteryCharging',
  },
  {
    id: 'charging-port',
    title: 'Type-C & Charging Port Repair',
    description: 'Fix loose cables, slow charging, or audio jack issues with precision micro-soldering.',
    timeEstimate: '25 mins',
    warranty: '3 Months Warranty',
    startingPrice: 350,
    iconName: 'Zap',
  },
  {
    id: 'camera-glass',
    title: 'Camera Lens & Module Repair',
    description: 'Crystal-clear sapphire lens replacement so photos never suffer from blurry glare.',
    timeEstimate: '30 mins',
    warranty: '3 Months Warranty',
    startingPrice: 400,
    iconName: 'Camera',
  },
  {
    id: 'water-damage',
    title: 'Water Damage Ultrasonic Revival',
    description: 'Specialized chemical wash and PCB de-oxidation to rescue motherboards and save data.',
    timeEstimate: '2 - 4 hours',
    warranty: 'Diagnostic Tested',
    startingPrice: 500,
    iconName: 'Droplets',
  },
  {
    id: 'motherboard-ic',
    title: 'Motherboard IC Micro-Soldering',
    description: 'Fix no-power, restart loops, network IC faults, and sound issues with microscope tools.',
    timeEstimate: 'Same Day Service',
    warranty: 'Guaranteed Diagnosis',
    startingPrice: 850,
    iconName: 'Cpu',
  },
];
