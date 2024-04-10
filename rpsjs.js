let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    const randomInd = Math.floor(Math.random()* 3);
    return options[randomInd];
}
const drawGame = () => {
    msg.innerText = "draw game. try again";
    msg.style.backgroundColor = "#99DDC8";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#5DA271";
    } else{
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText = `you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#C84630";
    }
}
const playGame = (userChoice)=> {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice)

    if( userChoice===compChoice){
        drawGame()
    }else {
        let userWin=true;
        if (userChoice=== "rock") {
            userWin = compChoice ==="paper" ? false : true;
        } else if (userChoice==="paper") {
            userwin = compChoice ==="scissors" ? false : true;
        } else {
            userwin ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame (userChoice)
    })
})