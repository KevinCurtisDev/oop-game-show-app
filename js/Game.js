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
       document.querySelector('#overlay').style.display= 'none'
       //clear lis from ul
       //reset lives
       this.activePhrase = this.getRandomPhrase();
       this.activePhrase.addPhraseToDisplay();
    }

    gameOver(){
       // displays screen overlay
       //updates overlay h1 to win or lose message
       //replaces start css class with win or lose css class
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
       } else {
           //add wrong css class to selected letter's button
           clicked.classList.add('wrong');
       }
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

