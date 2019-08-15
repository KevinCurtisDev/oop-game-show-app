/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

//button event listeners
const startButton = document.querySelector('#btn__reset');
const keyboardButtonListener = document.querySelector('#qwerty');
const keyboardLetters = document.querySelectorAll('.key');
const letterList = document.querySelector('#phrase ul');
const hearts = document.querySelectorAll('#scoreboard ol li img');


//Start button event listener
 startButton.addEventListener('click', () => {
    //Create a new game object
    game = new Game();
    //call the start game method from the game class
    game.startGame();
 });

 //Event listener tracking virtual keyboard interaction
 keyboardButtonListener.addEventListener('click', (e) => {
    e.target.style.pointerEvents  = 'none';
    if (e.target.className === 'key') {
       //call handleInteraction method from the game class
        game.handleInteraction(e.target);
    }
 });

 //Event listener that allows the game player to use their physcal keyboard
document.addEventListener('keyup', e => {
   if (event.defaultPrevented) {
       return;
   }

   let key = e.key || e.keyCode;

   //match physical keyboard keys to virtual keys
   keyboardLetters.forEach(letterBtn => {
      if(key === letterBtn.innerHTML) {
         letterBtn.style.pointerEvents = 'none';
         //call handleInteraction method using the letterBtn argument
         game.handleInteraction(letterBtn);
      }
   })
});