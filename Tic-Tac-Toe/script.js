let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{
    turnO =true;
    enableBox();
    msgContainer.classList.add("hide");

}
  

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("Box was clicked");
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
        }else{
            box.innerHTML = "X";
            turnO = true;    
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    })
})
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBox();
  };

const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner =(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const checkWinner =() =>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }

        }   
    }
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

