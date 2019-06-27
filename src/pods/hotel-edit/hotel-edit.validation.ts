import { createFormValidation, FieldValidationResult, ValidationConstraints, Validators } from "lc-form-validation";
import { noCitySelected } from "core";

const descriptionValidator = (value: any, vm: any): FieldValidationResult => {
  const isDescriptionValid = value.length > 24 && value.length < 256;
  const errorInfo = (isDescriptionValid) ? '' : 'Campo de descripción demasiado corto o largo';

  const fieldValidationResult: FieldValidationResult = new FieldValidationResult();
  fieldValidationResult.type = 'INVALID_DESCRIPTION';
  fieldValidationResult.succeeded = isDescriptionValid;
  fieldValidationResult.errorMessage = errorInfo;

  return fieldValidationResult;
}

const cityValidator = (value: any, vm: any): FieldValidationResult => {
  const isCityValid = value !== noCitySelected;
  const errorInfo = (isCityValid) ? '' : 'La ciudad no puede estar vacía';

  const fieldValidationResult: FieldValidationResult = new FieldValidationResult();
  fieldValidationResult.type = 'INVALID_DESCRIPTION';
  fieldValidationResult.succeeded = isCityValid;
  fieldValidationResult.errorMessage = errorInfo;

  return fieldValidationResult;
}

const hotelEditFormValidationConstraints: ValidationConstraints = {
  fields: {
    name: [{validator: Validators.required}],
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
      {validator: Validators.required},
      {
        validator: Validators.minLength,
        customParams: {length: 2},
      },
    ]


  }
}

export const hotelFormValidation = createFormValidation(hotelEditFormValidationConstraints);