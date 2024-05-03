export type ContextType = {
  file: {
    path: string;
    name: string;
  };
};

export type FileOptionType = {
  encoding: string;
  flag?: string;
  fileName?: string;
};

export type WriteOptionType = {
  path: string;
  encoding?: string;
};
