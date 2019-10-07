export interface ShopItem {
  readonly currency: string;
  readonly id: string;
  readonly image?: string;
  readonly name: string;
  readonly price: number;
  readonly provider: string;
  readonly agency: string;
  readonly time?: number;
  readonly category: string;
  readonly isFav: boolean;
}

export interface ShopPromotion {
  readonly id: string;
  readonly name: string;
  readonly provider: string;
  readonly href?: string;
  readonly url?: string;
  readonly validUntil: number;
}
