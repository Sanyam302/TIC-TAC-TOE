let box= document.querySelectorAll(".box");
let reset=document.querySelectorAll(".reset");

let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]

];
box.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("box is clicked");

    if(turn0){
        box.innerText="O";
        turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true;

    }
    box.disabled=true;

    check_winner();
});
});
const disabledbox=()=>{
    for(let i of box){
        i.disabled=true;
    }

}

const check_winner=()=>{
    for( let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2])
        console.log(box[pattern[0]],box[pattern[1]],box[pattern[2]]);
        let pos1=box[pattern[0]].innerText;
        let pos2=box[pattern[1]].innerText;
        let pos3=box[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="" ){
            if(pos1===pos2 && pos2===pos3){
            console.log("winner");
            disabledbox();
            
            let msg=document.querySelector(".msg");
            msg.innerText='congratulations, winner is  ';
            msg.classList.remove("hide");
            }
        }




    }

};