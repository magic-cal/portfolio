import { useState } from "react";
import { FormValidationRules, useValidation } from "./formValidation";

// @TODO: Refactor this to use a generic type for forms

export interface ContactFormFields {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const useContactForm = () => {
  const [fields, setFields] = useState<ContactFormFields>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const validationRules: FormValidationRules<ContactFormFields> = {
    name: {
      required: true,
    },
    email: {
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    phoneNumber: {
      required: false,
      pattern: {
        value: /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?[\d{3}[\s.-]?\d{4}$/,
        message: "Invalid phone number",
      },
    },
    message: {
      required: true,
    },
  };

  const { validate, errors } =
    useValidation<ContactFormFields>(validationRules);

  const handleChange = (
    target: keyof ContactFormFields,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields({
      ...fields,
      [target]: e.target.value,
    });
    errors[target] = "";
  };

  const validateForm = () => {
    return validate(fields);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    // Add this to a lambda server function
  };

  return {
    fields,
    handleChange,
    validateForm,
    errors,
    handleSubmit,
  };
};
