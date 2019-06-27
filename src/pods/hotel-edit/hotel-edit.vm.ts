import { FieldValidationResult } from "lc-form-validation";

export interface HotelEntityVm {
  id: string;
  picture: string;
  name: string;
  description: string;
  rating: number;
  address: string;
  city: string
}

export const createEmptyHotelEntityVm = (): HotelEntityVm => ({
  id: '',
  picture: '',
  name: '',
  description: '',
  rating: -1,
  address: '',
  city: ''
});
export interface HotelEditFormErrors {
  picture: FieldValidationResult;
  name: FieldValidationResult;
  description: FieldValidationResult;
  rating: FieldValidationResult;
  city: FieldValidationResult;
}

export const createDefaultHotelEditFormErrors = (): HotelEditFormErrors => ({
  picture:  new FieldValidationResult(),
  name:  new FieldValidationResult(),
  description:  new FieldValidationResult(),
  rating:  new FieldValidationResult(),
  city:  new FieldValidationResult(),
});

export interface HotelEditVm {
  hotelSelectedToEdit: HotelEntityVm
  hotelEditFormErrors: HotelEditFormErrors
}

export const createDefaultHotelEditVm = (): HotelEditVm => ({
  hotelSelectedToEdit: createEmptyHotelEntityVm(),
  hotelEditFormErrors: createDefaultHotelEditFormErrors()
})