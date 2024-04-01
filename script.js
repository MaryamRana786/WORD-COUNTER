const inputText = document.getElementById('inputText');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');

inputText.addEventListener('input', updateCounts);

function countCharacters(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
            count++;
        }
    }
    return count;
}

function countWords(text) {
    let count = 0;
    let wordStarted = false;
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && !wordStarted) {
            count++;
            wordStarted = true;
        } else if (text[i] === ' ') {
            wordStarted = false;
        }
    }
    return count;
}

function updateCounts() {
    const text = inputText.value;
    const charLength = countCharacters(text);
    const wordLength = countWords(text);

    charCount.textContent = charLength;
    wordCount.textContent = wordLength;
}

function clearText() {
    inputText.value = '';
    updateCounts();
}