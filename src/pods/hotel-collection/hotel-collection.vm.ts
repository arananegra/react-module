export interface HotelEntityVm {
  id: string;
  picture: string;
  name: string;
  description: string;
  rating: number;
  address: string;
}

export interface HotelCollectionVm {
  yListPosition: number
}

export const createDefaultHotelVm = (): HotelCollectionVm => ({
  yListPosition: 0
})