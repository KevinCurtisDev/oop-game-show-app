/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //button event listeners
 const startButton = document.querySelector('#btn__reset');
 const keyboardButtonListener = document.querySelector('#qwerty');

 const game = new Game();

 startButton.addEventListener('click', () => {
    game;
    game.startGame();
 });

 keyboardButtonListener.addEventListener('click', (e) => {
    if(e.target.class = 'key'){
        game.handleInteraction();
    }
 });