/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

 //button event listeners
 const startButton = document.querySelector('#btn__reset');
 const keyboardButtonListener = document.querySelector('#qwerty');

//Start button event listener
 startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
 });

 keyboardButtonListener.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
 });