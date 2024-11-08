// let greetingMessage = "Good Morning!";

function greetPeople(greetingMessage) {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage("Good Evening"); // Initialize a global variable
// greetingMessage and assigned it the value of the string
// argument 'Good Evening'
//
greetPeople("Good Morning!");

console.log(greetingMessage); // 'Good Evening'
