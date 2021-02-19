//array of beginning phrases for generator
const beginningPhrases = ['A bird in', 'A dog that bites' ];

//array of middle phrases for generator
const middlePhrases = ['the hand is worth', 'never bites' ];

//array of endings for generator
const endPhrases = ['two in the bush', 'the hand that feeds' ];

//main function, takes one of each type of phrase and creates a new saying from the three
const chineseFortuneGenerator = () => {

    //set internal variables to each different phrases
    let beginning = beginningPhrases[Math.floor(Math.random()*(beginningPhrases.length))];
    let middle = middlePhrases[Math.floor(Math.random()*(middlePhrases.length))];
    let end = endPhrases[Math.floor(Math.random()*(endPhrases.length))];

    console.log(`Your chinese fortune is: ${beginning} ${middle} ${end}`)

}; 

chineseFortuneGenerator();
chineseFortuneGenerator();

