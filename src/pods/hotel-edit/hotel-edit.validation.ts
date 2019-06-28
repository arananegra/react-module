import { createFormValidation, FieldValidationResult, ValidationConstraints, Validators } from "lc-form-validation";
import { noCitySelected, noEmptyFieldValidator } from "core";
import Axios, { AxiosResponse } from "axios";

export const imageExistsAndIsValid = (url: string) => {
  return new Promise((resolve, reject) => {
    Axios.get(url)
      .then((response: AxiosResponse) => {
        //response.headers['content-type'] === ''
        if (response.headers['content-type'].includes('image') && response.status === 200) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .catch(e => {
        resolve(false)
      })
  })
}

const pictureValidator = (value: any, vm: any): Promise<FieldValidationResult> => {
  return new Promise<FieldValidationResult>((resolve, reject) => {
    imageExistsAndIsValid(value).then((result: boolean) => {
      const isPictureValid = result;
      const errorInfo = (isPictureValid) ? '' : 'Imagen no valida';

      const fieldValidationResult: FieldValidationResult = new FieldValidationResult();
      fieldValidationResult.type = 'INVALID_RATING';
      fieldValidationResult.succeeded = isPictureValid;
      fieldValidationResult.errorMessage = errorInfo;

      resolve(fieldValidationResult);

    });
  })
}

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
    picture: [{validator: pictureValidator}],
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