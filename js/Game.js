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
}
// createPhrases(){};
    // startGame(){
    //     // this.board.drawHTMLBoard();
    //     // this.activePlayer.activeToken.drawHTMLtoken();
    //     // this.ready = true;
        
    // };

    // getRandomPhrase(){};

