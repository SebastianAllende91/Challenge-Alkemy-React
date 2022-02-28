export const required = (value) =>
  value || typeof value === 'number' ? undefined : 'requiredValidation';
  
  export const joinValidations = (validations) => (value) => {
    for (let index = 0; index < validations.length; index += 1) {
      const validation = validations[index];
      const result = validation(value);
      if (result) {
        return result;
      }
    }
    return undefined;
  };

  export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'emailValidation'
    : undefined;