const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

function timeOfDay(minutes) {
  let hours = Math.floor(Math.abs(minutes) / MINUTES_IN_HOUR);
  hours %= HOURS_IN_DAY;
  let minut = Math.abs(minutes) % MINUTES_IN_HOUR;

  if (minutes < 0) {
    hours = HOURS_IN_DAY - (hours + 1);
    minut = MINUTES_IN_HOUR - minut;
  }

  hours = hours.toString().padStart(2, 0);
  minut = minut.toString().padStart(2, 0);

  return `${hours}:${minut}`;
}

console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(-4231));
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
