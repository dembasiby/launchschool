const fs = require("fs");

function readNumbersFromFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading the file: ", err);
        return;
      }

      const lines = data.trim().split("\n");
      let list1 = [];
      let list2 = [];

      lines.forEach((line) => {
        let [num1, num2] = line.split(/\s+/).map(Number);
        list1.push(num1);
        list2.push(num2);
      });

      resolve({ list1, list2 });
    });
  });
}

module.exports = readNumbersFromFile;
