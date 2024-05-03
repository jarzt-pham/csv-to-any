import { ConventionalType } from "./convert.type";

export const toCamelCase = (input: string): string => {
  return input
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

export const toSnakeCase = (input: string): string => {
  return input.replace(/\s+/g, "_").toLowerCase();
};

export const convertKey = (key: string, option?: ConventionalType) => {
  let convertedKey = key.trim();

  if (option?.name) {
    if (option.name.camel) {
      convertedKey = toCamelCase(convertedKey);
    }

    if (option.name.snake) {
      convertedKey = toSnakeCase(convertedKey);
    }
  }

  if (option?.text) {
    if (option.text.lower) {
      convertedKey = convertedKey.toLowerCase();
    }

    if (option.text.upper) {
      convertedKey = convertedKey.toUpperCase();
    }
  }

  return convertedKey;
};
