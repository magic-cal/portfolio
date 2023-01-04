import { useState } from "react";
import { isString } from "../utils/typeUtils";

export type FormValidationRules<T> = {
  [key in keyof T]: {
    required: boolean;
    pattern?: {
      value: RegExp;
      message: string;
    };
    custom?: (value: T[keyof T]) => string | undefined | null;
  };
};

export type FormValidationErrors<T> = {
  [key in keyof T]?: string;
};

export const useValidation = <T>(validationRules: FormValidationRules<T>) => {
  const [errors, setErrors] = useState<FormValidationErrors<T>>({});

  const validate = (fields: T) => {
    const tempErrors: FormValidationErrors<T> = {};
    let key: keyof T;
    for (key in fields) {
      // Warning: If value is 0, it will be considered as false
      if (!fields[key]) {
        if (!validationRules[key].required) {
          continue; // Skip validation if value is empty and not required
        }
        tempErrors[key] = "Required field";
      }

      // String validation
      if (isString(fields[key])) {
        const stringVal = fields[key] as string;
        if (
          validationRules[key].pattern &&
          !validationRules[key].pattern?.value.test(stringVal)
        ) {
          tempErrors[key] = validationRules[key].pattern!.message;
        }
      }
      // Custom validation
      if (validationRules[key].custom) {
        const customError = validationRules[key].custom!(fields[key]);
        if (customError) {
          tempErrors[key] = customError;
        }
      }
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return { validate, errors };
};
