import { createDefaultValidationResult, ValidationResult } from '@lemoncode/fonk';

export const noEmptyFieldValidator = (fieldValidatorArgs): ValidationResult => {
	const {value, values} = fieldValidatorArgs;

	const passwordAndUsernameAreValid = Boolean(value);
	const errorInfo = (passwordAndUsernameAreValid) ? '' : 'El campo no puede estar vacío';

	const fieldValidationResult: ValidationResult = createDefaultValidationResult();
	fieldValidationResult.type = 'NO_EMPTY_FIELD';
	fieldValidationResult.succeeded = passwordAndUsernameAreValid;
	fieldValidationResult.message = errorInfo;

	return fieldValidationResult;
}
