let imges = document.querySelectorAll('.img');
let score = document.querySelector(".score");
let resetBtn = document.querySelector("button")
let playerScore = 0;
let computerScore = 0;
let result = document.querySelector("#Result");
const arr = ["rock", "paper", "scissors"];

const computer = () => {
    return arr[Math.floor(Math.random() * 3)]

}
const Reset = () => {
    playerScore = 0;
    computerScore = 0;
    score.children[0].firstChild.nodeValue = 0;
    score.children[1].firstChild.nodeValue = 0;
    result.innerText = "";
    console.clear();
};

const Score = () => {
    score.children[0].firstChild.nodeValue = playerScore;
    score.children[1].firstChild.nodeValue = computerScore;
};

const draw = () => {
    result.innerText = "Draw"
    console.log(`No Winner`)
}

const Winner = (a) => {
    result.innerText = `Winner is ${a}`
}


imges.forEach(img => {
    img.addEventListener("click", () => {
        let playerChoice = img.getAttribute("name");
        let computerChoice = computer();
        
        if (playerChoice === computerChoice) {
            draw();
        }
        else if ((playerChoice == "rock" && computerChoice == "scissors") ||
                 (playerChoice == "paper" && computerChoice == "rock") ||
                 (playerChoice == "scissors" && computerChoice == "paper")) {
            Winner("You");
            playerScore++;
            Score();
        }
        else {
            Winner("Computer");
            computerScore++;
            Score();
        }
    });
});

resetBtn.addEventListener("click",Reset)
