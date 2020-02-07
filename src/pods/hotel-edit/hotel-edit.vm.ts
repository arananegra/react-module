import { createDefaultValidationResult, ValidationResult } from "@lemoncode/fonk";

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
	picture: ValidationResult;
	name: ValidationResult;
	description: ValidationResult;
	rating: ValidationResult;
	city: ValidationResult;
}

export const createDefaultHotelEditFormErrors = (): HotelEditFormErrors => ({
	picture: createDefaultValidationResult(),
	name: createDefaultValidationResult(),
	description: createDefaultValidationResult(),
	rating: createDefaultValidationResult(),
	city: createDefaultValidationResult(),
});

export interface HotelEditVm {
	hotelSelectedToEdit: HotelEntityVm
	hotelEditFormErrors: HotelEditFormErrors
}

export const createDefaultHotelEditVm = (): HotelEditVm => ({
	hotelSelectedToEdit: createEmptyHotelEntityVm(),
	hotelEditFormErrors: createDefaultHotelEditFormErrors()
})
