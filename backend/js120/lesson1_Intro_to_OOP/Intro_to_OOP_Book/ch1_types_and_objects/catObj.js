let Cat = {
  purr() {
    console.log("Purr...");
  },

  eat() {
    console.log("I am eating...");
  },
};

let cheddar = Object.assign({}, Cat);
let cocoa = Object.assign({}, Cat);

cheddar.name = "Cheddar";
cheddar.color = "orange";
cheddar.gender = "male";

cocoa.name = "Cocoa";
cocoa.color = "black";
cocoa.gender = "female";
