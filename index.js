var questions = [
    [
        'What is your favorite color?',
        'black',
        'yellow',
        'red',
        'blue',
        'green',
        'white'
    ],
    [
        'What do you do in your free-time?',
        'trying to make money',
        'meeting up with friends',
        'coding',
        'playing videogames',
        'reading comics/watching movies',
        'spending time with my girlfriend'
    ]
];

var resultCharacters = [
    'Thomas Shelby',
    'Michael Scott',
    'Elliot Alderson',
    'Ragnar Lodbrock',
    'Sheldon Cooper',
    'Clay Jensen'
]

tCount = 0;
mCount = 0;
eCount = 0;
rCount = 0;
sCount = 0;
cCount = 0;
qCount = 1;


function nextQuestion() {
    check();

    if (qCount >= questions.length) {
        document.querySelector('content').innerHTML = `
    <h2>You are: `+resultCharacters[0]+`</h2>
    `;
    }

    document.querySelector('content').innerHTML = `
    <h2>`+questions[0][0]+`</h2>
        <input type="checkbox" id="answer1" value="answer1" name="answer1">
        <label for="question1">`+questions[qCount][0]+`</label><br>
        <input type="checkbox" id="answer2" value="answer2" name="answer2">
        <label for="question2">`+questions[qCount][1]+`</label><br>
        <input type="checkbox" id="answer3" value="answer3" name="answer3">
        <label for="question3">`+questions[qCount][2]+`</label><br>
        <input type="checkbox" id="answer4" value="answer4" name="answer4">
        <label for="question4">`+questions[qCount][3]+`</label><br>
        <input type="checkbox" id="answer5" value="answer5" name="answer5">
        <label for="question5">`+questions[qCount][4]+`</label><br>
        <input type="checkbox" id="answer6" value="answer6" name="answer6">
        <label for="question6">`+questions[qCount][5]+`</label><br>
        <button onclick="nextQuestion()">next</button>
    `;
    qCount++;
}

function check(){
    if (document.querySelector('#answer1').checked) {
        tCount++;
    }
}
