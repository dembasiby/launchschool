let jane = {
  firstName: "Jane",
  lastName: "Harrelson",
  age: 32,
  location: {
    country: "Denmark",
    city: "Aarhus",
  },
  occupation: "engineer",
  greet(subject) {
    console.log(`Hey, ${subject}!`);
  },
};

jane.greet("Bobby");
