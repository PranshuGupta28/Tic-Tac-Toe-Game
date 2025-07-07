let Boxes =document.querySelectorAll(".Box");
let Restbtn = document.querySelector("#resetButton ");
let msgbox=document.querySelector(".msgbox");
let msg=document.querySelector("#msg");


let turn0 = true;

const winpatterns= [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Top-left to bottom-right diagonal
  [2, 4, 6]  // Top-right to bottom-left diagonal
]

Boxes.forEach(
    (Box)=>{
        Box.addEventListener("click" ,()=>{
            console.log("click")
            if(turn0){
            Box.innerText ="X";
            Box.style ="color:rgb(216, 43, 0)";
           
            turn0 = false;
            }
            else{
            Box.innerText ="O";
            turn0 = true; 
            }
        Box.disabled=true;

        checkwinner();

        });
    });

    const disableBoxes =() =>{
        for (let box of Boxes){
            box.disabled=true;
        }
    }
    const showWinner=(winner) =>{
        msg.innerText=`Congatulations winner is ${winner}`;
        msgbox.classList.remove("hide")

    };

const checkwinner = () => {

    for (let parttern of winpatterns) {
        let pos1 = Boxes[parttern[0]].innerText;
        let pos2 = Boxes[parttern[1]].innerText;
        let pos3 = Boxes[parttern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3){
            console.log("winner",pos1);
            showWinner(pos1);
            disableBoxes();
        }
        }

    }

}