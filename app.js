let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset")
let popupContainer=document.querySelector(".popup")
let message=document.querySelector("#msg")
let newGamebtn=document.querySelector('#new-btn')
// let colour=document.getElementById("colr")

let turnO=true;
let possibilities=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame=()=>{
    turnO=true
    for(let i of boxes){
        i.disabled=false
        i.innerText=""
    }
    popupContainer.classList.add("hide")
}

const winnerDecided=(winner)=>{
    for(let i of boxes){
        i.disabled=true
    }
    popupContainer.classList.remove("hide")
    message.innerText=`Congratulations! Winner is ${winner}`

}
const drawMatch=()=>{
    popupContainer.classList.remove("hide");
    message.innerText="Draw! Click new Game button to restart"
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("btn clicked")
        if(turnO){
            box.innerText="X"
            turnO=false
        }
        else{
            box.innerText="O"
            turnO=true
        }
        box.disabled=true
        checkWinner()
    })
})
function checkWinner(){
    var count=0
    for(i of possibilities){
        // console.log(boxes[i[0]].innerText,boxes[i[1]].innerText,boxes[i[2]].innerText)
        
        let pos1=boxes[i[0]].innerText
        let pos2=boxes[i[1]].innerText
        let pos3=boxes[i[2]].innerText
        // if(pos1==="X"||pos2==="X"||pos3==="X"){
        //     colour.style.color="green"
        // }
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1)
                winnerDecided(pos1)
                break
            }
            
            if(count===6){
                console.log("daw",pos1)
                drawMatch()   
        }
        count++;
        }   
       
    }
}
resetBtn.addEventListener("click",resetGame)
newGamebtn.addEventListener("click",resetGame)