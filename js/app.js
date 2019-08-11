/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

//button event listeners
const startButton = document.querySelector('#btn__reset');
const keyboardButtonListener = document.querySelector('#qwerty');
const keyboardLetters = document.querySelectorAll('.key');

//Start button event listener
 startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
 });

 keyboardButtonListener.addEventListener('click', (e) => {
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
 });

 //Physical keyboard input
document.addEventListener('keyup', e => {
   if (event.defaultPrevented) {
       return;
   }

   let key = e.key || e.keyCode;

   //match physical keyboard keys to virtual keys
   keyboardLetters.forEach(letterBtn => {
      if(key === letterBtn.innerHTML) {
         //call handleInteraction method using the letterBtn argument
         game.handleInteraction(letterBtn);
      }
   })
});