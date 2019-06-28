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

    handleInteraction() {
        //document.getElementById("phrase").onclick;
        document.addEventListener("qwerty", (e) => {
            const key = envent.key;
            if (key === "keyrow") {
                return key;
            } else {
                return false;

            }

        });
    
    }
// Check if the player has revealed all of the letters in the active phrase.

   checkForWin() {
        showLettets = function (letter, index) {
            if (index < phrases.length) {
                this.append(letter[index ++]);
            }
        }
   };

   removeLife() {
       const life = document.getElementById(phrase);
       life.remove();

   };

   gameOver(gameWon)  {
    function on() {
        document.getElementById("overlay").style.display = "block";
      }
      
      function off() {
        document.getElementById("overlay").style.display = "none";
      }

   };
}

// createPhrases(){};
 

    
