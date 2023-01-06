const isDefined = (
  maybeVariable: string | undefined,
  name?: string
): string => {
  if (!maybeVariable) {
    throw new Error(`Variable was undefined: ${name}`);
  } else {
    return maybeVariable;
  }
};

export const config = {
  emailjs: {
    userId: isDefined(
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      "NEXT_PUBLIC_EMAILJS_USER_ID"
    ),
    serviceId: isDefined(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      "NEXT_PUBLIC_EMAILJS_SERVICE_ID"
    ),
    contactTemplateId: isDefined(
      process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE,
      "NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE"
    ),
  },
};
