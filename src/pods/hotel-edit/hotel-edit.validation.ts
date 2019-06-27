import { createFormValidation, FieldValidationResult, ValidationConstraints, Validators } from "lc-form-validation";
import { noCitySelected, noEmptyFieldValidator } from "core";

const ratingsValidator = (value: any, vm: any): FieldValidationResult => {
  const isRatingValid = value > 2;
  const errorInfo = (isRatingValid) ? '' : 'Rating no valido';

  const fieldValidationResult: FieldValidationResult = new FieldValidationResult();
  fieldValidationResult.type = 'INVALID_RATING';
  fieldValidationResult.succeeded = isRatingValid;
  fieldValidationResult.errorMessage = errorInfo;

  return fieldValidationResult;
}

const cityValidator = (value: any, vm: any): FieldValidationResult => {
  const isCityValid = value !== noCitySelected;
  const errorInfo = (isCityValid) ? '' : 'La ciudad no puede estar vacía';

  const fieldValidationResult: FieldValidationResult = new FieldValidationResult();
  fieldValidationResult.type = 'INVALID_CITY';
  fieldValidationResult.succeeded = isCityValid;
  fieldValidationResult.errorMessage = errorInfo;

  return fieldValidationResult;
}

const hotelEditFormValidationConstraints: ValidationConstraints = {
  fields: {
    name: [{validator: noEmptyFieldValidator}],
    picture: [{validator: Validators.required}],
    description: [
      {validator: Validators.required},
      {
        validator: Validators.minLength,
        customParams: {length: 24},
      },
      {
        validator: Validators.maxLength,
        customParams: {length: 256},
      }
    ],
    city: [
      {validator: Validators.required},
      {validator: cityValidator}
    ],
    rating: [
      {validator: ratingsValidator},
    ]


  }
}

export const hotelFormValidation = createFormValidation(hotelEditFormValidationConstraints);