function isRealPalindrome(str) {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    while (!/[a-zA-Z]/.test(str[left])) left++;
    while (!/[a-zA-Z]/.test(str[right])) right--;

    if (left < right && str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isRealPalindrome("madam")); // true
console.log(isRealPalindrome("Madam")); // true
console.log(isRealPalindrome("Madam I'm Adam")); // true
console.log(isRealPalindrome("356653")); // true
console.log(isRealPalindrome("")); // true
console.log(isRealPalindrome("123ab321")); // false
