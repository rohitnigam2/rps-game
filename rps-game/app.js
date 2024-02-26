let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const mess = document.querySelector("#msg");

const userScorePara = document.querySelector("#u-score");
const compScorePara = document.querySelector("#c-score");

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game Was Draw.");
    mess.innerText = "Game Was Draw. Play Again";
    mess.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        mess.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        // mess.innerText = 'You Win.';
        mess.style.backgroundColor = "green";
    }
    else {
        comScore++;
        compScorePara.innerText = comScore;
        mess.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
        // mess.innerText = 'You Lose.';
        mess.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    // Generate Computer Choice
    const compChoice = getComputerChoice();
    console.log("comp choice", compChoice);

    if (userChoice === compChoice) {
      // Game Was Draw
      drawGame();
    } 
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach( (choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


