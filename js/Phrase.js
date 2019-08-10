/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const letterList = document.querySelector('#phrase ul');

 class Phrase{
     constructor(phrase){
        this.phrase = phrase.toLowerCase();
        this.phraseLetterArray = this.phrase.split("");
     }

     addPhraseToDisplay() {
        this.phraseLetterArray.forEach(letter => {
            let letterElement = document.createElement('li');
            letterElement.innerHTML = letter;
            if(letterElement.innerHTML === ' ') {
                letterElement.classList.add('space');
            } else {
                letterElement.classList.add('letter');
            }
            letterList.append(letterElement);
        })
     }

     checkLetter(clicked) {
        if(clicked.nodeName === 'BUTTON') {
            if(this.phraseLetterArray.includes(clicked.innerHTML)){
                return true;
            } 
       }
     }

     showMatchedLetter(clicked) {
        let domLetters = Array.from(document.querySelectorAll('#phrase ul li'));
        
        domLetters.forEach(domLetter => {
            if(domLetter.innerHTML === clicked.innerHTML) {
                domLetter.setAttribute('class', 'show');
            }
        });
     }

 }