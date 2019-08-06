/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
        this.missed = 0;
        this.activePhrase = null;
     }

     startGame = () => {
        //clear lis from ul
        //reset lives
        this.getRandomPhrase();
        this.activePhrase = this.getRandomPhrase;
        this.addPhraseToDisplay();
     }

     addPhraseToDisplay = () => {

     }

     gameOver() {
        // displays screen overlay
        //updates overlay h1 to win or lose message
        //replaces start css class with win or lose css class
     }

     getRandomPhrase() {
        //TODO: retrieve random phrase from phrase array
     }

     handleInteraction = () => {
        //disable selected letter's on screen keyboard button
        //add wrong css class to selected letter's button and call remove life method
        // or add chosen css class to letter's keyboard button, call 
        // showMatchedLetter method on phrase, call checkForWin method.
        // if win call gameOver method.
     }

     removeLife() {
        // removes life from scoreboard. Increment missed property.
        //if 5 missed guesses call game over.
     }

     checkForWin() {
        // checks if all letters are revealed.
    }

 }