function Cat(name) {
  this.name = name;

  this.purr = function () {
    console.log("purr");
  };

  this.speak = function () {
    console.log("meow");
  };
}

let butterscotch = new Cat("Butterscotch");
butterscotch.purr();
butterscotch.speak();

let pudding = new Cat("Pudding");
pudding.purr();
pudding.speak();
