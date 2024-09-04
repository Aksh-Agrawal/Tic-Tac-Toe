let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newset");
let msgcon = document.querySelector(".msgco");
let msg = document.querySelector("#msg");
let turnO = true;

const Winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const newsetGame = () =>{
    turnO = true
    enableBox();
    msgcon.classList.add("hide");
}



boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        console.log("Box Was Clicked");
        if (turnO === true){
            box.innerText = "O";
            box.classList.add("change")
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
            box.classList.remove("change")
        }
        box.disabled = true;

       checkWinner ();
});
});
const disabledBox = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBox = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner =(winner) => {
    msg.innerText = `Winner is "${winner}"`
    msgcon.classList.remove("hide");
    disabledBox();
}
const checkWinner = () => {
  for (let pattern of Winpattern) {
   
   let pos1 = boxes[pattern[0]].innerText;
   let pos2 = boxes[pattern[1]].innerText;
   let pos3 = boxes[pattern[2]].innerText;
   if (pos1 != "" && pos2 != "" && pos3 != ""){
    if (pos1 === pos2 && pos2 === pos3){
        console.log("Winner!", pos1);
        showWinner(pos1);
    }
   }
  }
};

newGame.addEventListener("click", newsetGame);
reset.addEventListener("click",newsetGame);