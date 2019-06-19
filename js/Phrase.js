/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 //create a Phrase class to handle the creation of phrases.
 class Phrase {
   // phrase;
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    //this.addLetter = addLetter.bind();
    //this.showMatchedLetter = showMatchedLetter.bind();
    }
    //createPhrases();
    //createPhrases = phrases();
    createPhrases() {};
addPhraseToDisplay(){
    //const eachLetter = ('');
    function startGame() {
        const eachLetter= document.getElementById("phrase").innerHTML = section;
        //const  eachLetter = "";
        document.getElementById("currentGuess").innerHTML = secretBlanks(secretWord)
    
        function guesLetter(matchLetters) {
            for (var i = 0; i < secretWord.length; i++) {
                matchLetters += ("_ ");
            }
            return matchLetters;    
        }
    }












};

}

