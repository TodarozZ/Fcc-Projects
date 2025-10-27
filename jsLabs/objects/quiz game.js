const questions = [
    {
        category: "Science: Computers",
        question: "The HTML5 standard was published in 2014?",
        choices: ["true", "false", "idk"],
        answer: "true"
    },
    {
        category: "Science: Computers",
        question: "The common software-programming acronym 'I18N' comes from the term 'Interlocalization'?",
        choices: ["true", "false", "idk"],
        answer: "false"
    },
    {
        category: "Science: Computers",
        question: "The first computer bug was formed by a moth being stuck in a computer?",
        choices: ["true", "false", "idk"],
        answer: "true"
    },
    {
        category: "Gaming: Board Games",
        question: "The game 'Monopoly' was released in 1975?",
        choices: ["true", "false", "idk"],
        answer: "false"
    },
    {
        category: "History: World War I",
        question: "The first world war started in 1914?",
        choices: ["true", "false", "idk"],
        answer: "true"
    }
];

const getRandomQuestion = (quetionsArr) => quetionsArr[Math.floor(Math.random() * quetionsArr.length)];

const getRandomComputerChoice = (choicesArr) => choicesArr[Math.floor(Math.random() * choicesArr.length)];

const getResults = (quest, cpuChoice) =>
    cpuChoice === quest.answer ? "The computer's choice is correct!" : `The computer's choice is wrong. The correct answer is: ${quest.answer}`;

const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
const result = getResults(randomQuestion, computerChoice);
console.log(result)


