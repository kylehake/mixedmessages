//array of beginning phrases for generator
const beginningPhrases = ['A bird in', ];

//array of middle phrases for generator
const middlePhrases = ['the hand is worth', ];

//array of endings for generator
const endPhrases = ['two in the bush', ];

//main function, takes one of each type of phrase and creates a new saying from the three
const chineseFortuneGenerator = () => {

    //set internal variables to each different phrases
    let beginning = beginningPhrases[Math.floor(Math.random()*(beginningPhrases.length))];
    let middle = middlePhrases[Math.floor(Math.random()*(middlePhrases.length))];
    let end = endPhrases[Math.floor(Math.random()*(endPhrases.length))];

    console.log(`Your chinese fortune is: ${beginning} ${middle} ${end}`)

}; 
