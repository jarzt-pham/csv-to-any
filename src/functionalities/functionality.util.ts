import * as fs from "fs";
import {
  ContextType,
  FileOptionType,
  WriteOptionType,
} from "./functionality.type";

export const getNameByFilePath = (pathFile: string): string => {
  if (!pathFile) throw new Error("Path file is required");
  return pathFile.split("/").pop();
};

export const readFileByFilePath = (
  filePath: string,
  option?: FileOptionType
): Promise<string[]> => {
  const fileName = option?.fileName || getNameByFilePath(filePath);
  const context: ContextType = {
    file: {
      name: fileName,
      path: filePath,
    },
  };

  let rows: string[] = [];

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        let msg = `Error occurred while reading the CSV file`;
        if (context.file) msg += ` ${fileName}`;

        console.error(msg, err);
        reject(err);
      }

      rows = data.trim().split("\n");

      resolve(rows);
    });
  });
};

export const writeFileFromCsv = (data: string, option?: WriteOptionType) => {
  const path = option.path;

  const encoding = (option?.encoding || "utf-8") as BufferEncoding;

  fs.writeFile(path, data, encoding, (err) => {
    if (err) {
      let msg = `Error occurred while writing the JSON file to ${path}`;

      console.error(msg, err);
    }
  });
};
