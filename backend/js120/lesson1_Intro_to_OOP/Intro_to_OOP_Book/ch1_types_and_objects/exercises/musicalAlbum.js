function MusicalAlbum(title, artist, releaseYear) {
  this.title = title;
  this.artist = artist;
  this.releaseYear = releaseYear;
}

let thriller = new MusicalAlbum("Thriller", "Michael Jackson", 1982);
let theDarkSideOfTheMoon = new MusicalAlbum(
  "The Dark Side of the Moon",
  "Pink Floyd",
  1973,
);

console.log(thriller);
console.log(theDarkSideOfTheMoon);

/*
 * Type:
 * Constructor function: MusicalAlbum function
 * Instance objects: thriller and theDarkSideOfTheMoon
 */
