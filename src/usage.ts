import { csvToArray } from "./functionalities";

const path = "./src/mock/username.csv";
csvToArray(path, {
  formatColumn: {
    name: {
      snake: true,
    },
    case: {
      lower: true,
    },
  },
  write: {
    path: "./src/mock/username.json",
  },
}).then((data) => console.log(data));
