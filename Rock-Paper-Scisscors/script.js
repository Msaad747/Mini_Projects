var x;
let imges = document.querySelectorAll('.img');
let score = document.querySelector(".score");
let resetBtn = document.querySelector("button")
let You = 0
let Com = 0
let result = document.querySelector("#Result")
arr = ["rock", "paper", "scissors"]
let Player = ["You", "Computer"]

const computer = () => {
    return arr[Math.floor(Math.random() * 3)]

}
const Reset=()=>{
    if(You>Com)
        console.log(`You is Winner`)
    else
        console.log(`Computer Win's`)
    score.children[1].firstChild.nodeValue = 0;
    score.children[0].firstChild.nodeValue = 0;
    You=0
    Com=0
    result.innerText=""
    console.clear()
}

const Score = () => {
    if (x == "Computer") {
        score.children[1].firstChild.nodeValue = Com
    }
    else if (x == "You") {
        score.children[0].firstChild.nodeValue = You
    }


}

const draw = () => {
    result.innerText = "Draw"
    console.log(`No Winner`)
}

const Winner = (a) => {
    result.innerText = `Winner is ${a}`
}


imges.forEach(img => {
    img.addEventListener("click", () => {
        let get = img.getAttribute("name")
        let com_Chocie =computer();
        if (get === com_Chocie) {
            draw();
        }
        else if (get == "rock" && com_Chocie == "paper" || get == 'paper' && com_Chocie == "scissors") {

            x = Player[1]
            Winner(Player[1])
            console.log(Player[1])
            Com++
            Score();

        }
        else if (get == "rock" && com_Chocie == "scissors" || get == "scissors" && com_Chocie == "paper") {
            x = Player[0]
            Winner(Player[0])
            console.log(Player[0])
            You++
            Score();

        }

    })
})

resetBtn.addEventListener("click",Reset)