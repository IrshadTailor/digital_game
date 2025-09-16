let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#computer-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];
};

const drawGame=()=>{
    msg.innerText="It's a Draw!Play again!";
    msg.style.backgroundColor="chocolate";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorePara.innerText=compScore;
        msg.innerText=`You lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    // Generate computer choice
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        //Draw Game
        drawGame(); 
    }else {
        let userWin=true;
        if(userChoice==="rock"){
            // paper,scissor
            userWin=compChoice==="paper"? false : true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissors"? false:true;
        }else{
            //rock,paper
            compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});


