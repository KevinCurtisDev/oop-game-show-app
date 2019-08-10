/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

 //button event listeners
 const startButton = document.querySelector('#btn__reset');
 const keyboardButtonListener = document.querySelector('#qwerty');

//Start button event listener
 startButton.addEventListener('click', () => {
    game.startGame();
 });

 keyboardButtonListener.addEventListener('click', (e) => {
    if(e.target.getAttribute('class','key')){
        game.handleInteraction(e.target);
    }
 });