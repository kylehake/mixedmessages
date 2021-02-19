const beginningPhrases = ['A bird in', ];

const middlePhrases = ['the hand is worth', ];

const endPhrases = ['two in the bush', ];


const chineseFortuneGenerator = () => {
    let beginning = beginningPhrases[Math.floor(Math.random()*(beginningPhrases.length))];
    let middle = middlePhrases[Math.floor(Math.random()*(middlePhrases.length))];
    let end = endPhrases[Math.floor(Math.random()*(endPhrases.length))];
}; 
