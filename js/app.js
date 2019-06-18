/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const phrase = new Phrase();
const game = new Game();
const phrase = new Phrase('Life is like a box of chocolates');
//console.log(`Phrase - phrase: ${phrase.phrase}`);

//Creates phrases for use in game

const createPhrases= phrases ();
const game = new Game();
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});
 