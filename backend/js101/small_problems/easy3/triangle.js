function triangle(num) {
  for (let index = 1; index <= num; index++) {
    console.log(" ".repeat(num - index).concat("*".repeat(index)));
  }
}

triangle(5);
triangle(9);
