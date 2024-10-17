const input = document.querySelector('input');
const output = document.querySelector('output');
const span = document.querySelector('span');
const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
];
let randomizedWord = '';
let maskedWord = '';
let guesses = 0;

const newGame = () => {
    const random = Math.floor(Math.random() * words.length);
    randomizedWord = words[random];
    maskedWord = "*".repeat(randomizedWord.length);
    console.log(randomizedWord);
    output.innerHTML = maskedWord;
    span.innerHTML = guesses;
};

const replaceFoundChars = (guess) => {
    let newString = maskedWord.split('');
    for (let i = 0; i < randomizedWord.length; i++) {
        const char = randomizedWord[i];
        if (char === guess) {
            newString[i] = guess;
        }
    }
    maskedWord = newString.join('');
    output.innerHTML = maskedWord;
};

newGame();

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission.
        const guess = input.value.toLowerCase();
        if (guess.length === 1) {
            guesses++;
            span.innerHTML = guesses;
            replaceFoundChars(guess);
            if (maskedWord.toLowerCase() === randomizedWord.toLowerCase()) {
                win();
            }
        } else if (guess === randomizedWord.toLowerCase()) {
            win();
        } else {
            alert("You guessed wrong!");
        }
        input.value = '';
    }
});

const win = () => {
    alert(`You have guessed right, the word is ${randomizedWord}.`);
    newGame();
};




    
