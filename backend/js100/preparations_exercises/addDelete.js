function addDelete(arr) {
  console.log(arr);
  arr.shift();
  console.log(arr);
  arr.splice(0, 1);
  console.log(arr);
  arr.push("geothermal");
  console.log(arr);
}

let energy = ["fossil", "solar", "wind", "tidal", "fusion"];

addDelete(energy);
