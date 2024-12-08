function bubbleSort(arr) {
  for (let index = 0; index < arr.length; index++) {
    let noSwap = true;

    for (let IIndex = 0; IIndex < arr.length - 1; IIndex++) {
      if (arr[IIndex] > arr[IIndex + 1]) {
        [arr[IIndex], arr[IIndex + 1]] = [arr[IIndex + 1], arr[IIndex]];
        noSwap = false;
      }
    }

    if (noSwap) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
