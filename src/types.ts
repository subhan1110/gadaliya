export interface SkinPhotoItem {
  id: string;
  name: string;
  nameGu?: string;
  category: string;
  imageUrl: string;
  description: string;
  badge: string;
  price: number; // 150
  shippingFee: number; // 50
}

export interface RepairService {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  warranty: string;
  startingPrice: number;
  iconName: string;
}
