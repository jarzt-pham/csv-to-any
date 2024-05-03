export type NameConventional =
  | { camel: true; snake?: false }
  | { camel?: false; snake: true }
  | { camel?: false; snake?: false };

export type TextCaseConventional =
  | { lower: true; upper?: false }
  | { lower?: false; upper: true }
  | { lower?: false; upper?: false };

export type ConventionalType = {
  name?: NameConventional;
  case?: TextCaseConventional;
};
