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
    ],
    [
        'If someone offered you a cigarette, would you take it?',
        'Give me the damn thing!',
        'No...',
        'I only smoke, when I can`t handle the stress',
        'What is a cigarette?',
        'Of course not, do you know how harmful that is?',
        'I`ve never done it. Let me try...'
    ],
    [
        'Which job would you pick?',
        'Entrepreneur',
        'Manager',
        'Programmer',
        'Soldier',
        'Scientist',
        'Non of them'
    ],
    [
        'What is your favorite food?',
        'I have no time to eat...',
        'Candy, definitely!',
        'I don`t know',
        'Meat',
        'I usually order the food and have it brought to me',
        'I eat what`s available'
    ],
    [
        'What is your favorite school subject?',
        'I don`t care',
        'All Subjects are great',
        'Computer Science',
        'PE',
        'Physics',
        'I don`t have a favorite subject'
    ]
];

var resultCharacters = [
    'Thomas Shelby',
    'Michael Scott',
    'Elliot Alderson',
    'Ragnar Lothbrok',
    'Sheldon Cooper',
    'Clay Jensen'
]

var images = [
    './images/thomasShelby.jpg',
    './images/michaelScott.jpg',
    './images/elliotAlderson.jpg',
    './images/ragnarLothbrok.jpg',
    './images/sheldonCooper.jpg',
    './images/clayJensen.jpg'
]

var resultCounts = [
    0,
    0,
    0,
    0,
    0,
    0
]


qCount = 1;
var winnerPositions = [];
winnerCount = 0;




function nextQuestion() {
    check();
    if (qCount >= questions.length) {
        pickWinner();
        return;
    }
    document.querySelector('content').innerHTML = `
    <h2>` + questions[qCount][0] + `</h2>
    <div id="formDiv">
    <form>
        <input type="radio" id="answer1" value="` + questions[qCount][1] + `" name="answer">
        <label for="answer1">` + questions[qCount][1] + `</label><br>
        <input type="radio" id="answer2" value="` + questions[qCount][2] + `" name="answer">
        <label for="answer2">` + questions[qCount][2] + `</label><br>
        <input type="radio" id="answer3" value="` + questions[qCount][3] + `" name="answer">
        <label for="answer3">` + questions[qCount][3] + `</label><br>
        <input type="radio" id="answer4" value="` + questions[qCount][4] + `" name="answer">
        <label for="answer4">` + questions[qCount][4] + `</label><br>
        <input type="radio" id="answer5" value="` + questions[qCount][5] + `" name="answer">
        <label for="answer5">` + questions[qCount][5] + `</label><br>
        <input type="radio" id="answer6" value="` + questions[qCount][6] + `" name="answer">
        <label for="answer6">` + questions[qCount][6] + `</label><br>
        </form>
        </div>
        <button onclick="nextQuestion()">next</button>
    `;
    qCount++;
}

function check() {
    if (document.querySelector('#answer1').checked) {
        resultCounts[0]++;
    } else if (document.querySelector('#answer2').checked) {
        resultCounts[1]++;
    } else if (document.querySelector('#answer3').checked) {
        resultCounts[2]++;
    } else if (document.querySelector('#answer4').checked) {
        resultCounts[3]++;
    } else if (document.querySelector('#answer5').checked) {
        resultCounts[4]++;
    } else if (document.querySelector('#answer6').checked) {
        resultCounts[5]++;
    } else {
        qCount--;
        alert("You have to tick one!");
    }
}

function pickWinner() {
    findWinner();

    let winnerText = ``;
    switch (winnerCount) {
        case 1:
            winnerText = `
            <img src="` + images[winnerPositions[0]] + `">
            <h2>You are: ` + resultCharacters[winnerPositions[0]] + `</h2>`;
            break;
        case 2:
            winnerText = `
            <img src="` + images[winnerPositions[0]] + `">
            <img src="` + images[winnerPositions[1]] + `">
            <h2>You are 50%: ` + resultCharacters[winnerPositions[0]] + ` and 50%: ` +
                resultCharacters[winnerPositions[1]] + `</h2>`;
            break;
        case 3:
            winnerText = `
            <img src="` + images[winnerPositions[0]] + `">
            <img src="` + images[winnerPositions[1]] + `">
            <img src="` + images[winnerPositions[2]] + `">
            <h2>You are 33%: ` + resultCharacters[winnerPositions[0]] + ` , 33%: ` +
                resultCharacters[winnerPositions[1]] + ` and 33%: ` + resultCharacters[winnerPositions[2]] + `</h2>`;
            break;
        default:
            winnerText = `<h2>You are more than 3 characters! Congrats!</h2>`;
    }

    document.querySelector('content').innerHTML = winnerText;
}

function findWinner() {
    let highestCount = 0;
    for (var i = 0; i < resultCounts.length; i++) {
        if (resultCounts[i] > highestCount) {
            highestCount = resultCounts[i];
        }
    }
    for (let i = 0; i < resultCounts.length; i++) {
        if (resultCounts[i] === highestCount) {
            winnerPositions.push(i);
            winnerCount++;
        }
    }
}