function letterPercentages(str) {
  let percentages = {};
  let lowerCases = str.match(/[a-z]/g);
  let upperCases = str.match(/[A-Z]/g);
  let totalLenth = str.length;

  percentages.lowercase = (
    lowerCases ? (lowerCases.length / totalLenth) * 100 : 0
  ).toFixed(2);

  percentages.uppercase = (
    upperCases ? (upperCases.length / totalLenth) * 100 : 0
  ).toFixed(2);

  percentages.neither = (
    100 -
    (Number(percentages.uppercase) + Number(percentages.lowercase))
  ).toFixed(2);

  return percentages;
}

console.log(letterPercentages("abCdef 123"));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages("AbCd +Ef"));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages("123"));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
