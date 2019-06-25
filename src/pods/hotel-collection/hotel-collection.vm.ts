export interface HotelEntityVm {
  id: string;
  picture: string;
  name: string;
  description: string;
  rating: number;
  address: string;
}

export const createEmptyHotelEntityVm = (): HotelEntityVm => ({
  id: '',
  picture: '',
  name: '',
  description: '',
  rating: -1,
  address: ''
});

export interface HotelVm {
  hotelSelectedToEdit: HotelEntityVm
}

export const createDefaultHotelVm = (): HotelVm => ({
  hotelSelectedToEdit: createEmptyHotelEntityVm()
})