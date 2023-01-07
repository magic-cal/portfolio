export const isString = (x: any): x is string => {
  return typeof x === "string";
};

export const isNotNullOrUndefined = <T>(
  val: T | undefined | null
): val is T => {
  return val !== undefined && val !== null;
};
