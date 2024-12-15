let student = {
  name: "Joanna",
  age: 27,

  // study: function () {
  study() {
    // Concise method synthax
    // console.log(`${student.name} is studying.`);
    console.log(`${this.name} is studying.`);
  },

  // pass: function () {
  pass() {
    // Concise method synthax
    // console.log(`${student.name} has passed this course.`);
    console.log(`${this.name} has passed this course.`);
  },
};

student.study();
student.pass();

let anotherStudent = {
  name: "Kim",
  age: 30,

  // study: function () {
  study() {
    // Concise method synthax
    // console.log(`${student.name} is studying.`);
    console.log(`${this.name} is studying.`);
  },

  // pass: function () {
  pass() {
    // Concise method synthax
    // console.log(`${student.name} has passed this course.`);
    console.log(`${this.name} has passed this course.`);
  },
};

anotherStudent.study();
anotherStudent.pass();
