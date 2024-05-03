import { ConventionalType, convertKey } from "../convert";
import { FileOptionType, WriteOptionType } from "./functionality.type";
import { readFileByFilePath, writeFileFromCsv } from "./functionality.util";

export const csvToArray = async (
  filePath: string,
  option?: {
    file?: FileOptionType;
    text?: ConventionalType;
    write?: WriteOptionType;
  }
) => {
  const rowsFromCsv = await readFileByFilePath(filePath, option?.file);

  if (rowsFromCsv.length === 0) return [];

  const firstRow: string = rowsFromCsv[0];
  let columnNames = firstRow.split(";");
  if (option?.text) {
    columnNames = columnNames.map((column) => convertKey(column, option.text));
  }

  const cleanArray = [];

  for (let i = 1; i < rowsFromCsv.length; i++) {
    const row = rowsFromCsv[i];
    const columnValues = row.split(";");

    const obj = {};
    columnNames.forEach((column, columnIndex) => {
      obj[column] = columnValues[columnIndex];
    });

    cleanArray.push(obj);
  }

  if (option?.write)
    writeFileFromCsv(JSON.stringify(cleanArray), {
      path: option.write.path,
      encoding: option.write?.encoding,
    });

  return cleanArray;
};
