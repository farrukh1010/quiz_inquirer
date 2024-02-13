import inquirer from 'inquirer';
// Define an array of quiz questions
const quizQuestions = [
    {
        question: 'What is the capital of Pakistan?',
        choices: ['Islamabad', 'Lahore', 'Faisalabad', 'Karachi'],
        answer: 'Islamabad'
    },
    {
        question: 'Who is founder of Pakistan "?',
        choices: ['Muhammad Ali Jinnah', 'Allama Iqbal', 'Liquet Ali', 'Ayub Khan'],
        answer: 'Muhammad Ali Jinnah'
    },
    {
        question: 'What is the chemical symbol for water?',
        choices: ['H2O', 'CO2', 'NaCl', 'C6H12O6'],
        answer: 'H2O'
    }
];
async function startQuiz() {
    let score = 0;
    console.log('Welcome to the Quiz!');
    for (const question of quizQuestions) {
        const { userAnswer } = await inquirer.prompt({
            type: 'list',
            name: 'userAnswer',
            message: question.question,
            choices: question.choices
        });
        if (userAnswer === question.answer) {
            console.log('Correct!');
            score++;
        }
        else {
            console.log(`Incorrect! The correct answer is: ${question.answer}`);
        }
        console.log();
    }
    console.log(`Quiz complete! Your score is: ${score}/${quizQuestions.length}`);
}
startQuiz();
