function hexadecimalToInteger(string) {
  const HEXADECIMAL = 16;
  const DIGIT_OBJECTS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };

  let number = 0;
  let len = string.length;

  for (let i = 0; i < len; i++) {
    let index = len - i - 1;
    number += DIGIT_OBJECTS[string[i].toUpperCase()] * HEXADECIMAL ** index;
  }

  return number;
}

console.log(hexadecimalToInteger("4D9f") === 19871);
