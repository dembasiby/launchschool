const rlSync = require("readline-sync");

const SQ_FOOT_PER_METER = 10.7639;

console.log("Enter the length of the room: ");
let length = Number(rlSync.prompt());

console.log("Enter the width of the room:");
let width = Number(rlSync.prompt());

let area = length * width;
let areaInSquareFeet = area * SQ_FOOT_PER_METER;

console.log(
  `The area of the room is ${area.toFixed(2)} square meters (${areaInSquareFeet.toFixed(2)} square feet).`,
);
