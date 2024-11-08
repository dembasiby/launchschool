/*
////// Undersatnd the problem

Input:
  handle each digit separtely 
  simple operation of squaring each digit

Output:
number with every digit squared 

Inplicit requirement => each number 6 => 36, 4 = > 16 => 3616> 

 ///// Examples
9119 <==> 811181 


///// Data structure:
- array of striing (number)


////// Algorithm :

initialize a result string to an empty string
convert the number to a string of digits
LOOP through the string of digits.
  convert each digit to a number, square the number, convert it back to a string
  concatenate the string to the result string.
return the result string converted to a number 
 
*/

////// Code:

function square_digits(number) {
  let result = "";
  number
    .toString()
    .split("")
    .forEach((n) => (result += n * n));

  return result;


console.log(square_digits(0) == 0);
console.log(square_digits(64) == 3616);
console.log(square_digits(1111) == 1111);
console.log(square_digits(2222) == 4444);
console.log(square_digits(3333) == 9999);
console.log(square_digits(3212) == 9414);
console.log(square_digits(1234) == 14916);
console.log(square_digits(77455754) == 4949162525492516);
console.log(square_digits(99999999) == 8181818181818181);
