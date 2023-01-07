import { isNotNullOrUndefined } from "./typeUtils";

export interface DateFormatterOptions {
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day?: "numeric" | "2-digit";
}

export const formatDate = (
  date: Date | string,
  options: DateFormatterOptions
) => {
  if (typeof date === "string") {
    return date;
  }
  return date.toLocaleDateString("en-GB", {
    year: options.year ?? "numeric",
    month: options.month ?? "short",
    day: options.day,
  });
};

export const formatDatePeriod = (
  startDate?: Date | "Present",
  endDate?: Date | "Present",
  options: DateFormatterOptions = {}
) => {
  return [startDate, endDate]
    .filter(isNotNullOrUndefined)
    .map((date) => formatDate(date, options))
    .join(" - ");
};
