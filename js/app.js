/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//const phrase = new Phrase();
const game = new Game();
//const handleInt = game.handleInteraction();
// const qwerty = document.getElementById("qwerty");

// const randomPhrase = game.getRandomPhrase();
// randomPhrase.addPhraseToDisplay(randomPhrase);
// const overlay = document.getElementById('overlay');
//  overlay.style.display = 'none';

document.getElementById('btn__reset').addEventListener('click', function(){
  clearDisplay();
});

const key = document.getElementsByClassName('key');
for (let i = 0; i < key.length; i++) {
  key[i].addEventListener('click', function() {
  pressButton();  
})
}

function clearDisplay() {
  document.querySelector('#overlay').style.visibility = 'hidden';
  overlay.classList.remove('start');
  game.startGame();
}

function pressButton(){
  event.target.disabled = true;
  event.classList.add('chosen')
  game.handleInteraction(event.target);
};








//  const btn = document.createElement("button"); 

//  btn.innerHTML = "btn__reset";                   
//  document.body.appendChild(btn);
//  //console.log("game")
//  //console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
 
// qwerty.addEventListener("click", (e) => {
//   if (e.target.className === ("key") ){
// const selectLetter = e.target.innerText;
// game.handleInteraction(selectLetter, randomPhrase);

//   }
//  });

















