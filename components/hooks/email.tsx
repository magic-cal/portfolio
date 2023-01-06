import emailjs from "@emailjs/browser";
import { config } from "../../config";

const { userId, serviceId, contactTemplateId } = config.emailjs;

export const useEmailService = <T extends {}>(
  templateID: string = contactTemplateId
) => {
  const sendEmail = async (data: T) => {
    try {
      const result = await emailjs.send(serviceId, templateID, data, userId);
      if (result.status === 200) {
        return true;
      }
    } catch (e: any) {
      console.error(e);
    }
    return false;
  };
  return { sendEmail };
};
