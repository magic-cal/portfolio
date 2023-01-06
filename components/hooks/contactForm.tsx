import { useState } from "react";
import { useEmailService } from "./email";
import { FormValidationRules, useValidation } from "./formValidation";
import { config } from "../../config";

// @TODO: Refactor this to use a generic type for forms

export interface ContactFormFields {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const useContactForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
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
        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        message: "Invalid phone number",
      },
    },
    message: {
      required: true,
    },
  };

  const { validate, errors } =
    useValidation<ContactFormFields>(validationRules);

  const { sendEmail } = useEmailService<ContactFormFields>(
    config.emailjs.contactTemplateId
  );

  const handleChange = (
    target: keyof ContactFormFields,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields({
      ...fields,
      [target]: e.target.value,
    });
    errors[target] = "";
    setSubmitted(false);
  };

  const validateForm = () => {
    return validate(fields);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    // @TODO: Move this to a lambda server function
    if (await sendEmail(fields)) {
      setFields({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      setSubmitted(true);
    }
    setLoading(false);
  };

  return {
    fields,
    handleChange,
    validateForm,
    errors,
    handleSubmit,
    submitted,
    loading,
  };
};
