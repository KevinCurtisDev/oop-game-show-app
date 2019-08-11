class Game {
    constructor() {
       this.missed = 0;
       this.activePhrase = null;
       this.phrases = [
            new Phrase("phrase one"),
            new Phrase("phrase two"),
            new Phrase("phrase three"),
            new Phrase("phrase four"),
            new Phrase("phrase five")
       ];
    }

    startGame() {
      const hearts = document.querySelectorAll('#scoreboard ol li img');
      hearts.forEach(heart => heart.src = "images/liveHeart.png")
      
      const buttons = document.querySelectorAll('#qwerty button');
       
       //clear lis from ul
      document.querySelector('#phrase ul').innerHTML = '';
      buttons.forEach(button => {
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

    gameOver(message, css){
       // display screen overlay
       document.querySelector('#overlay').style.display= 'block'
       //updates overlay h1 to win or lose message
       document.querySelector('#game-over-message').innerHTML = message;

       //replaces start css class with win or lose css class
       document.querySelector('#overlay').removeAttribute('class', 'start')
       document.querySelector('#overlay').setAttribute('class', css)
    }

    
    getRandomPhrase() {
       //retrieve random phrase from phrase array
       let randomPhrase = Math.floor(Math.random() * this.phrases.length);
       return this.phrases[randomPhrase];
     }

    handleInteraction(clicked) {
        //disable selected letter's on screen keyboard button
       if(this.activePhrase.checkLetter(clicked)) {
           //add chosen css class to letter's keyboard button
           clicked.classList.add('chosen');
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

    checkForWin() {
       let domLetters = Array.from(document.querySelectorAll('#phrase ul li'));
        // checks if all letters are revealed.
       const winMessage = "You Won!"
       const winCss = "win"
       
        if(letterShowCount === domLetters.length -1) {
            this.gameOver(winMessage, winCss);
        }
   }

}

