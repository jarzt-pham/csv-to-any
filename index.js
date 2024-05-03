const { csvToArray } = require("./dist");

const path = "./src/mock/username.csv";
const data = csvToArray(path, {
  text: {
    name: {
      snake: true,
    },
    text: {
      lower: true,
    },
  },
  write: {
    path: "./src/mock/username.json",
  },
}).then((data) => console.log(data));
