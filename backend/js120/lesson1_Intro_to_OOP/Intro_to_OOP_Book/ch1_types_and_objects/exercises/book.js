function Book(title, author, yearPublished) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
}

let neuromancer = new Book("Neuromancer", "William Gibson", 1984);
let doomsdayBook = new Book("Doomsday Book", "Connie Willis", 1992);

console.log(neuromancer);
console.log(doomsdayBook);

/*
 * Type of the objects created: Book
 * Constructor function: Book function 
 * Instance objects: neuromancer and doomsdayBook:async () => {
   {
 }
 */
