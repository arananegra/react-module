import {
  Validators,
  createFormValidation,
  ValidationSchema,
  ValidationResult,
  createDefaultValidationResult
} from '@lemoncode/fonk';
import { noCitySelected, noEmptyFieldValidator } from "core";
import Axios, { AxiosResponse } from "axios";

const imageExistsAndIsValid = (url: string) => {
  return new Promise((resolve, reject) => {
    Axios.get(url)
      .then((response: AxiosResponse) => {
        (response.headers['content-type'].includes('image') && response.status === 200) ?
          resolve(true) : resolve(false)
      })
      .catch(e => {
        resolve(false)
      })
  })
}

const pictureValidator = (fieldValidatorArgs): Promise<ValidationResult> => {
  const { value, values } = fieldValidatorArgs;
  return new Promise<ValidationResult>((resolve) => {
    imageExistsAndIsValid(value).then((result: boolean) => {
      const isPictureValid = result;
      const errorInfo = (isPictureValid) ? '' : 'Imagen no valida';

      const fieldValidationResult: ValidationResult = createDefaultValidationResult();
      fieldValidationResult.type = 'INVALID_PICTURE';
      fieldValidationResult.succeeded = isPictureValid;
      fieldValidationResult.message = errorInfo;

      resolve(fieldValidationResult);

    });
  })
}

const ratingsValidator = (fieldValidatorArgs): ValidationResult => {
  const { value, values } = fieldValidatorArgs;
  const isRatingValid = value > 2;
  const errorInfo = (isRatingValid) ? '' : 'Rating no valido';

  const fieldValidationResult: ValidationResult = createDefaultValidationResult();
  fieldValidationResult.type = 'INVALID_RATING';
  fieldValidationResult.succeeded = isRatingValid;
  fieldValidationResult.message = errorInfo;

  return fieldValidationResult;
}

const cityValidator = (fieldValidatorArgs): ValidationResult => {
  const { value, values } = fieldValidatorArgs;
  const isCityValid = value !== noCitySelected;
  const errorInfo = (isCityValid) ? '' : 'La ciudad no puede estar vacía';

  const fieldValidationResult: ValidationResult = createDefaultValidationResult();
  fieldValidationResult.type = 'INVALID_CITY';
  fieldValidationResult.succeeded = isCityValid;
  fieldValidationResult.message = errorInfo;

  return fieldValidationResult;
}

const hotelEditFormValidationConstraints: ValidationSchema = {
  field: {
    name: [{validator: noEmptyFieldValidator}],
    picture: [{validator: pictureValidator}],
    description: [
      {validator: Validators.required},
      {
        validator: Validators.minLength,
        customArgs: {length: 24},
      },
      {
        validator: Validators.maxLength,
        customArgs: {length: 256},
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
