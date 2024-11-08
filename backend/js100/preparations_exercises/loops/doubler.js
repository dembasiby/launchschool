function doubler(num) {
  console.log(num);

  if (num < 50) {
    num *= 2;
    doubler(num);
  }
}

doubler(1);
