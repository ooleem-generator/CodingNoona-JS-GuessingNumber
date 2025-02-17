let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = []
let answerArea = document.getElementById("answer-area");

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function() {
    userInput.value = "";
})

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    answerArea.textContent = `사실 정답은... ${computerNum}`
    console.log("정답", computerNum)
}

function play() {
    let userValue = userInput.value;

    if (userValue<1 || userValue>100) {
        resultArea.textContent = "1과 100 사이 숫자를 입력해주세요"
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요"
        return;
    }

    chances -- ;
    chanceArea.textContent = `남은 기회 : ${chances}번`
    console.log("chance", chances);

    if (userValue < computerNum) {
        resultArea.textContent = "UP!!!"
    } else if (userValue > computerNum) {
        resultArea.textContent = "DOWN!!!"
    } else {
        resultArea.textContent = "맞추셨습니다!!!"
        gameOver = true
    }

    history.push(userValue);
    console.log(history);

    if(chances<=0){
        gameOver = true;
        resultArea.textContent = "GAME OVER...:("
    }

    if (gameOver == true){
        playButton.disabled = true;
    }
}

function reset() {
    userInput.value = "";
    pickRandomNum();
    chances = 3;
    resultArea.textContent = "결과가 나온다";
    gameOver = false;
    playButton.disabled = false;
    history = [];
    chanceArea.textContent = `남은 기회 : ${chances}번`;
}

pickRandomNum();