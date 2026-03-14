let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let win_msg = document.querySelector("#winner");

let P1 = true; // true = player turn
let gameOver = false;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Enable/Disable boxes
const disabledboxs = () => boxes.forEach(box => box.disabled = true);
const enableboxs = () => boxes.forEach(box => box.disabled = false);

// Check winner
const winner = () => {
  for (let pos of winPatterns) {
    let pos1 = boxes[pos[0]].innerText;
    let pos2 = boxes[pos[1]].innerText;
    let pos3 = boxes[pos[2]].innerText;

    if (pos1 && pos1 === pos2 && pos2 === pos3) {
      win_msg.innerText = `Winner is ${pos1}`;
      pos.forEach(i => boxes[i].style.backgroundColor = "lightgreen");
      disabledboxs();
      gameOver = true;
      return;
    }
  }

  // Check draw
  if (!gameOver && Array.from(boxes).every(box => box.innerText !== "")) {
    win_msg.innerText = "It's a Draw!";
    gameOver = true;
  }
};

// Computer move
const computerMove = () => {
  if (gameOver) return;

  let emptyBoxes = Array.from(boxes).filter(box => box.innerText === "");
  if (emptyBoxes.length === 0) return;

  let randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
  randomBox.innerText = "X";
  randomBox.style.color = "red";
  randomBox.disabled = true;

  winner();
  P1 = true; // back to player turn
};

// Player click
boxes.forEach(box => {
  box.addEventListener("click", () => {
    if (!P1 || gameOver || box.innerText !== "") return; // only allow player move

    box.innerText = "O";
    box.style.color = "blue";
    box.disabled = true;

    winner();
    if (!gameOver) {
      
      setTimeout(computerMove, 300); // computer plays after 0.3s
    }
  });
});

// Reset game
const resetGame = () => {
  boxes.forEach(box => {
    box.innerText = "";
    box.style.backgroundColor = "white";
    enableboxs();
  });
  P1 = true;
  gameOver = false;
  win_msg.innerText = "";
};

resetBtn.addEventListener("click", resetGame);
