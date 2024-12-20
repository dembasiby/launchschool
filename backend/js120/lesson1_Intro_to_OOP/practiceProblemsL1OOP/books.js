function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      return `${this.title} was written by ${this.author}. I ${this.read ? "have" : "haven't"} read it.`;
    },

    readBook() {
      this.read = true;
    },
  };
}

let mythos = createBook("Mythos", "Stephen Fry");
let meTalk = createBook("Me Talk Pretty One Day", "David Sedaris");
let aunts = createBook("Aunts aren't Gentlemen", "PG Wodehouse");

console.log(mythos.getDescription());
mythos.readBook();
console.log(mythos.getDescription());
console.log(meTalk.getDescription());
console.log(aunts.getDescription());
