const fs = require("fs");
const { resolve } = require("path");

function getLists(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading the file, ", err);
      }

      let lines = data.trim().split("\n");

      let lists = lines.map((line) => line.split(" ").map(Number));

      resolve({ lists });
    });
  });
}

module.exports = getLists;
