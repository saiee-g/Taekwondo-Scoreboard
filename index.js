

const redScore = document.getElementById('red-score');
const blueScore = document.getElementById('blue-score');
let redSave = document.getElementById('red-save');
let blueSave = document.getElementById('blue-save');

function addScoreRed(rscore){
    let currentScore = parseInt(redScore.textContent);
    if (isNaN(currentScore)) {
        currentScore = 0;
    }
    let newScore = currentScore + rscore;
    redScore.textContent = newScore;
}

function subScoreRed(rfoul){
    redScore.textContent -= rfoul;
}

function addScoreBlue(bscore){
    let currentScore = parseInt(blueScore.textContent);
    if (isNaN(currentScore)) {
        currentScore = 0;
    }
    let newScore = currentScore + bscore;
    blueScore.textContent = newScore;
}

function subScoreBlue(bfoul){
    blueScore.textContent -= bfoul;
}

function reset(){
    redScore.textContent = 0;
    blueScore.textContent = 0;
    redSave.textContent = "Score: ";
    blueSave.textContent = "Score: ";
}

function save(){
    redSave.textContent += redScore.textContent + " -> ";
    redScore.textContent = 0;
    blueSave.textContent += blueScore.textContent + " -> ";
    blueScore.textContent = 0;

}