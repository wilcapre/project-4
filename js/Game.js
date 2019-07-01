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
    getRandomPhrase() {
    const random = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    //const ranPhrases = this.randomPhrase[random];
    return random;
    };

    startGame() {
        const begin = (overlay);
        this.activePhrase = this.getRandomPhrase();

    };

    handleInteraction(letter, phrase) {
        if (phrase.checkLetter(letter)){
        // show match letter and check for win
         phrase.showMatchedLetter(letter)
         if (this.checkForWin()) {
            this.gameOver(true);
         }
        } else {
        // remove life
        this.removeLife();
        return false;
        }
        
    
    }
// Check if the player has revealed all of the letters in the active phrase.

   checkForWin() {
       const hiddenLetters = document.getElementsByClassName("letter hide")
        if (hiddenLetters.length === 0 ){
            return true;
        } else {
            return false;
        }
   };

   removeLife() {
       const life = document.getElementById(phrase);
       life.remove();

   };

   gameOver(gameWon)  {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("btn__reset").style.display = "none";
    const message = document.getElementById("game-over-message");
       if ( true){
           message.innerText = "congrats";
            // player won

       } else {
           // player lost
           message.innerText = "sorry you lose";
        }


   };
}

// createPhrases(){};
 

    
