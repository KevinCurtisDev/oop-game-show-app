class Game {
    constructor() {
       this.missed = 0;
       this.activePhrase = null;
       this.phrases = [
            new Phrase("A dime a dozen"),
            new Phrase("A piece of cake"),
            new Phrase("Beating around the bush"),
            new Phrase("A piece of cake"),
            new Phrase("Make my day")
       ];
    }

    //Starts a new game
    startGame() {
      hearts.forEach(heart => heart.src = "images/liveHeart.png")
      
      const buttons = document.querySelectorAll('#qwerty button');
       
       //clear lis from ul
      document.querySelector('#phrase ul').innerHTML = '';
      buttons.forEach(button => {
         //reset pointer events for keyboard inputs
         if(button.style.pointerEvents = 'none') {
            button.style.pointerEvents = 'auto';
         }

         if(button.getAttribute('class', 'chosen')) {
            button.classList.remove('chosen');
          }
   
          if(button.getAttribute('class', 'wrong')) {
            button.classList.remove('wrong');
          }
      });
      
      document.querySelector('#overlay').style.display= 'none'

       //reset lives
       this.activePhrase = this.getRandomPhrase();
       this.activePhrase.addPhraseToDisplay();
    }

    //Ends the game and displays appropriate win or lose message
    gameOver(message, css){
       // display screen overlay
       document.querySelector('#overlay').style.display= 'block'
       //updates overlay h1 to win or lose message
       document.querySelector('#game-over-message').innerHTML = message;

       //replaces start css class with win or lose css class
       document.querySelector('#overlay').removeAttribute('class', 'start')
       document.querySelector('#overlay').setAttribute('class', css)
    }

    //Selects a random prhase from the phrases array
    getRandomPhrase() {
       //retrieve random phrase from phrase array
       let randomPhrase = Math.floor(Math.random() * this.phrases.length);
       return this.phrases[randomPhrase];
     }

    //Handles keyboard inputs (virtual and physical)
    handleInteraction(clicked) {
        //disable selected letter's on screen keyboard button
       if(this.activePhrase.checkLetter(clicked)) {
           //add chosen css class to letter's keyboard button
           clicked.classList.add('chosen');
           //prevent further clicks on button
           clicked.style.pointerEvents = 'none';
           // showMatchedLetter method on phrase, call checkForWin method.
           this.activePhrase.showMatchedLetter(clicked)
           //Check for a win condition
           this.checkForWin()
       } else {
           //add wrong css class to selected letter's button
           clicked.classList.add('wrong');
           this.removeLife();
       }
    }

    //Removes a life for every wrong guess
    removeLife() {
      const hearts = document.querySelectorAll('#scoreboard ol li img');

      const loseMessage = "You Lost"
      const loseCss = "lose"
       // removes life from scoreboard. 
       
       //Increment missed property.
       this.missed++;

       hearts[this.missed - 1].src = "images/lostHeart.png"

       //if 5 missed guesses call game over.
       if(this.missed === 5) {
           this.gameOver(loseMessage, loseCss);
       }
    }

    //Checks if the player has won the game
    checkForWin() {
       let domLetters = document.querySelectorAll('.letter');

        // checks if all letters are revealed.
       const winMessage = "You Won!"
       const winCss = "win"
       
        //when no more letters have the class letter, all letters have been revealed
        if(domLetters.length === 0) {
            this.gameOver(winMessage, winCss);
        }
   }
}