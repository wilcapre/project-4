/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 //create a Phrase class to handle the creation of phrases.
 class Phrase {
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   }
   addPhraseToDisplay(phrase){
    const newPhrase = phrase.phrase;
    const phraseArr = newPhrase.split("");
    
    const ul = document.getElementsByTagName("ul");
    
    for (let i = 0; i < phraseArr.length; i++){
        let li = document.createElement("li");
        if (phraseArr[i] === " "){
            // if space add class hide and space to the li.
            li.innerText = `${phraseArr[i]}`;
            li.className = `hide space`
        } else {
            // else not a space it will a letter
            // add the letter in the li and add classes of hide letter and actual letter
            li.innerText = phraseArr[i];
            li.className = `hide letter ${phraseArr[i]}`

        }
        ul[0].appendChild(li);
    }


   };

}


