/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//const phrase = new Phrase();
const game = new Game();
const phrase = new Phrase('Life is like a box of chocolates');
//console.log(`Phrase - phrase: ${phrase.phrase}`);

//Creates phrases for use in game

const createPhrases= phrases ();
createPhrases();
game.phrases.forEach((phrase, index) => {
    //console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);

    });

const logPhrase = (phrase) => {
    //console.log(`Phrase - phrase: `, phrase.phrase);
    };
   // const game = new Game();
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());


const randomPhrase = game.getRandomPhrase();
//const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();

//const game = new Game();
game.startGame();
//console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
 