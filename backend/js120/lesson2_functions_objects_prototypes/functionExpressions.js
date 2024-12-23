prompt("How are you today?");

function prompt(message) {
  console.log(`=> ${message}`);
}

bar();
function bar() {
  console.log("This is bar");
}

foo();
const foo = function () {
  console.log("This is foo");
};
