import { csvToArray } from "./functionalities/functionality";

const filePath = "src/mock/username.csv";
csvToArray(filePath, {
  file: {
    encoding: "utf8",
  },
  text: {
    name: {
      snake: true,
    },
  },
}).then((data) => console.log(data));
