let userScore = 0;
let computerScore = 0;


const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userscr = document.querySelector('#user-score');
const compscr = document.querySelector('#comp-score');

const getcomputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawGame = () => {
    
    msg.innerText = "Draw Play again!";
    msg.style.backgroundColor="blue";
};

const showwinner = (userwin,userchoice,computerChoice) => {
    
    if(userwin){
        userScore++;
        userscr.innerText = userScore;
        
        msg.innerText = `You win! ${userchoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        compscr.innerText = computerScore;
       
        msg.innerText = `You lose! ${computerChoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userchoice) => {
    console.log("userchoice = ", userchoice);
    //genetrate computer choice
    const computerChoice = getcomputerChoice();
    console.log("computer choice = ", computerChoice);


    if(userchoice === computerChoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = computerChoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userwin = computerChoice === "scissors" ? false : true;
        }else{
            userwin = computerChoice === "rock" ? false : true;
        } 
        
        showwinner(userwin,userchoice,computerChoice);
    }


};


choices.forEach((choice) => {
    
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");
       
        playGame(userchoice);

    });
});
    