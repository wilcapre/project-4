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
    //Iniatilize  and return random phrases

    getRandomPhrase() {
    const random = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    //const ranPhrases = this.randomPhrase[random];
    return random;
    };

    startGame() {
        const begin = (overlay);
        const ul = document.querySelector('#phrase ul');
        ul.innerHTML = "";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    // reset the gameboard for the start game button can load new game
    const reset = document.querySelector("btn__reset");
   
    //document.getElementById("reset").onclick = function() {
        //document.getElementById("startGame").innerHTML = "";
     //};
    // remove li elment
        var list = document.getElementById("ul");
       // list.removeChild(list.childNodes[0]); 

        for( let i=0; i < btn__reset.length; i++) {
            btn__reset[i].addEventListener('ul', function(){
               list.parentNode.removeChild(this);
            });
         }

        //reset.addEventListener("click", btn__reset);
        function btn__reset () {
            if (btn__reset == "startGame") {
                btn__reset == "reset button";

            } else {
                btn__reset == "startGame";
            }
         };

    //reset all heart lives
    this.missed = 0;
      //document.querySelector('#btn__reset').style.display = 'block';

    //   const ul = document.querySelector('#phrase ul');
    //   const totalLis = ul.childElementCount;
    //   for (let i = 0; i < totalLis; i++) {
    //       ul.removeChild(ul.firstElementChild);
    //   }

    // const ul = document.querySelector('#phrase ul');
    // const totalLis = ul.childElementCount;
    // for (let i = 0; i < totalLis; i++) {
    //     ul.removeChild(ul.firstElementChild);
    // }
    // const phraseCont = document.getElementById('phrase');
    // const keyboard = document.getElementsByClassName('key');
    // //startButton.innerText = "Reset"; //Changes start button to say 'reset'
    // phraseCont.innerHTML = '<ul></ul>'; //Removes phrase from display
    // for (let i = 0; i < keyboard.length; i++) { //resets onscreen keyboard
    //   keyboard[i].className = 'key';
    //   keyboard[i].removeAttribute('disabled');
    // }

    const heartLivesReset = Array.from(document.querySelectorAll('.tries'));
    heartLivesReset
        .filter(item =>  !item.children[0].src.includes('liveHeart.png'))
        .map(item => item.children[0].src = item.children[0].src.replace('lostHeart.png','liveHeart.png'));
    
        const displayKeyboardReset = Array.from(document.querySelectorAll('#qwerty button'));
        displayKeyboardReset
            .filter(item => item.className !== 'key')
            .map(item => {
                item.className = 'key';
                item.disabled = false;
                });


    };

    // this will handle check win, game over and remove life
    handleInteraction(button) {
        var phrase = this.activePhrase;
        const letter = button.textContent;
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
    //removes a life from the scoreboard
   removeLife() {
        const lives = document.getElementsByClassName("tries");
    var heartToChange = lives[this.missed].children[0];
    heartToChange.src = "images/lostHeart.png";

    this.missed += 1; 
    if (this.missed === 5) {
        this.gameOver(false);
    }
   };
   //depending on the outcome of the game will display win or lose
   gameOver(gameWon)  {
    document.getElementById("overlay").style.display = "flex";
    // document.querySelector('#overlay').style.visibility = 'visible';
    // document.getElementById("btn__reset").style.display = "none";
    const message = document.getElementById("game-over-message");
       if ( gameWon){
           message.innerText = "congrats";
           document.getElementById("overlay").className = "win"; 

    // player won

       } else {
    // player lost
           message.innerText = "sorry you lose";
           document.getElementById("overlay").className = "lose";
        }
   };
}


 

    
