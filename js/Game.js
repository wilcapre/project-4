/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //Create game class

class Game { 
    constructor() {
      this.missed = 0;
      this.phrases = [
       new Phrase("up"),
       new Phrase("down"),
       new Phrase("left side"),
       new Phrase("right side"),
       new Phrase("center")
      ];
     this.activePhrase = null; 
    }
    //Iniatilize random phrases
    getRandomPhrase(){
    const random = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    //const ranPhrases = this.randomPhrase[random];
    return random;
    };

    startGame() {};

}
// createPhrases(){};
 

    
