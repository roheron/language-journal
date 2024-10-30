const wordForm = document.getElementById('wordForm');
const wordList = document.getElementById('wordList');

wordForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const word = document.getElementById('word').value;
    const translation = document.getElementById('translation').value;
    const sentence = document.getElementById('sentence').value || generateExampleSentence(word, translation);

    addWordToList(word, translation, sentence);
    wordForm.reset();
});

function addWordToList(word, translation, sentence) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${word}</strong> - ${translation}<br>
        <em>Example: ${sentence}</em>
    `;
    wordList.appendChild(li);
}

function generateExampleSentence(word, translation) {
    return `I just learned that '${word}' means '${translation}'!`;
}
