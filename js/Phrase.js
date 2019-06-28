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
   handleInteraction(letter){
    if (phrase === letter) {
      alert("please enter the matches letter");
    } else {
        alert ("incorrect try again");
    }
    }

   checkLetter(letter) {
    console.log("the guess was:" + letter);
    console.log("the phrase is:" + this.phrase)

    var contains = this.phrase.includes(letter)
    console.log("includes " + contains)
    return contains;
   }
   showMatchedLetter(letter) {
   document.getElementById(letter).classList.remove("hide");  
   document.getElementById(letter).classList.add("show");
}
 }
