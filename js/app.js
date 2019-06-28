/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//const phrase = new Phrase();
const game = new Game();
//const handleInt = game.handleInteraction();
const qwerty = document.getElementById("qwerty");

const randomPhrase = game.getRandomPhrase();
randomPhrase.addPhraseToDisplay(randomPhrase);
const overlay = document.getElementById('overlay');
 overlay.style.display = 'none';

 game.startGame();
 const btn = document.createElement("button"); 
 //addeventList  
 btn.innerHTML = "btn__reset";                   
 document.body.appendChild(btn);
 //console.log("game")
 //console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
 
qwerty.addEventListener("click", (e) => {
  if (e.target.className === ("key") ){
const selectLetter = e.target.innerText;
game.handleInteraction(selectLetter, randomPhrase);

  }
 });

















