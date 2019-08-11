/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(phrase){
        this.phrase = phrase.toLowerCase();
        this.phraseLetterArray = this.phrase.split("");
        this.letterShowCount = 0;
     }

     //Append a randomly chosen phraseto the dom
     addPhraseToDisplay() {
         //cycle through the array of letters in th random phrase
        this.phraseLetterArray.forEach(letter => {
            //create a list item element for each letter
            let letterElement = document.createElement('li');
            letterElement.innerHTML = letter;
            //set the appropriate css class to each list element
            if(letterElement.innerHTML === ' ') {
                letterElement.classList.add('space');
            } else {
                letterElement.classList.add('letter');
            }
            //append each letter to the ul item in the html doc
            letterList.append(letterElement);
        })
     }

     //check if a keyboard button was clicked
     checkLetter(clicked) {
         //if a keyboard button as clicked, return true, otherwise return false
        if(clicked.nodeName === 'BUTTON') {
            if(this.phraseLetterArray.includes(clicked.innerHTML)){
                return true;
            } 
        }
     }

     //If the clicked key matches a letter in the phrase, reveal the letter
     showMatchedLetter(clicked) {
        let domLetters = Array.from(document.querySelectorAll('#phrase ul li'));
        
        domLetters.forEach(domLetter => {
            if(domLetter.innerHTML === clicked.innerHTML) {
                domLetter.setAttribute('class', 'show');
                this.letterShowCount++;
            }
        });
     }
 }