As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.

## Understand the Problem

### Input

- A string representation of time expressed in hours and minutes separated by a colon.

### Output

- A number representing the number of minutes after midnight
- A number representing the number of minutes before midnight

### Rules

#### Explicit Requirements

- 2 functions that respectively return the number of minutes before midnight and the number of minutes after midnight
- both functions should return a number in the range 0 to 1439.
- time is in 24-hour format
- Disregard Daylight Savings and Standard Time and other irregularities.

#### Implicit Requirements

### Mental Model

Convert the hours in minutes and add them to the minutes. This total minutes % 1440 is the answer for `afterMidnight`.
substract this number from 1440 to get the number of minutes before midnight.

## Examples:

12:34 == 720 minutes + 34 = 754 (after midnight)
1440 - 754 = 686 (before midnight)

```js
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
```

## Data Structures

No intermediary data structure needed here

## Algorithm

- `afterMidnight`
  convert the hours to minutes
  add the converted hours to the minutes
  return total minutes modulo 1440 (total number of minutes in a day)

- `beforeMidnight`
  convert the hours to minutes
  add the converted hours to the minutes
  return (1440 - total minutes) modulo 1440 (total number of minutes in a day)

## Code

```javascript
const NUMBER_OF_MINUTES_PER_DAY = 1440;
const NUMBER_OF_MINUTES_PER_HOUR = 60;

function getMinutes(time) {
  let [hours, minutes] = time.split(":");
  let totalMinutes = hours * NUMBER_OF_MINUTES_PER_HOUR + minutes * 1;
  return totalMinutes;
}
function afterMidnight(time) {
  return getMinutes(time) % NUMBER_OF_MINUTES_PER_DAY;
}

function beforeMidnight(time) {
  let totalMinutes = getMinutes(time);
  return (
    (NUMBER_OF_MINUTES_PER_DAY - totalMinutes) % NUMBER_OF_MINUTES_PER_HOUR
  );
}
```
