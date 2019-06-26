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

export interface HotelEditVm {
  hotelSelectedToEdit: HotelEntityVm
}

export const createDefaultHotelEditVm = (): HotelEditVm => ({
  hotelSelectedToEdit: createEmptyHotelEntityVm()
})