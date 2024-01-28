function getComputerChoice()
{
    let compChoice;
    let choice = Math.floor(Math.random() * 3 + 1);
    if(choice == 1) compChoice = "Rock";
    if(choice == 2) compChoice = "Paper";
    if(choice == 3) compChoice = "Scissors";
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    let whoWon;
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
   
        if( playerSelection == "Rock")
    {
        if(computerSelection == "Rock") whoWon = "TIE";
        if(computerSelection == "Paper") whoWon = "COMPUTER WINS";
        if(computerSelection == "Scissors") whoWon = "PLAYER WINS";
    }
    if( playerSelection == "Paper")
    {
        if(computerSelection == "Rock") whoWon = "PLAYER WINS";
        if(computerSelection == "Paper") whoWon = "TIE";
        if(computerSelection == "Scissors") whoWon = "COMPUTER WINS";
    }
    if( playerSelection == "Scissors")
    {
        if(computerSelection == "Rock") whoWon = "COMPUTER WINS";
        if(computerSelection == "Paper") whoWon = "PLAYER WINS";
        if(computerSelection == "Scissors") whoWon = "TIE";
    }
    return whoWon;
}
    let playerScore = 0;
    let computerScore = 0;

  const rockButton = document.createElement("button");
  const paperButton = document.createElement("button");
  const scissorsButton = document.createElement("button");

  const container = document.querySelector('#container');
  
  rockButton.textContent = 'Rock';
  paperButton.textContent = 'Paper';
  scissorsButton.textContent = 'Scissors';

  paperButton.style.margin = '12px';

  let score;
  rockButton.addEventListener('click', function () {
    score = playRound('rock',getComputerChoice());
    if (score == "COMPUTER WINS" || score === "TIE") computerScore++;
    if (score == "PLAYER WINS" || score === "TIE") playerScore++;
    console.log(score);

    displayScoreP.textContent = `Player score: ${playerScore}`;
    displayScoreC.textContent = `Computer score: ${computerScore}`;
  })

  scissorsButton.addEventListener('click', function () {
    score = playRound('scissors',getComputerChoice());
    if (score == "COMPUTER WINS" || score === "TIE") computerScore++;
    if (score == "PLAYER WINS" || score === "TIE") playerScore++;
    console.log(score);

    displayScoreP.textContent = `Player score: ${playerScore}`;
    displayScoreC.textContent = `Computer score: ${computerScore}`;
  })

  paperButton.addEventListener('click', function () {
    score = playRound('paper',getComputerChoice());
    if (score == "COMPUTER WINS" || score === "TIE") computerScore++;
    if (score == "PLAYER WINS" || score === "TIE") playerScore++;
    console.log(score);

    displayScoreP.textContent = `Player score: ${playerScore}`;
    displayScoreC.textContent = `Computer score: ${computerScore}`;
  })

  const displayScoreP = document.createElement('p');
  const displayScoreC = document.createElement('p');

  const scoreContainer = document.querySelector('#scores');
  scoreContainer.style.border = 'solid';
  scoreContainer.style.width = '160px';
  scoreContainer.style.paddingLeft = '12px';


  container.appendChild(rockButton);
  container.appendChild(paperButton);
  container.appendChild(scissorsButton);

  scoreContainer.appendChild(displayScoreP);
  scoreContainer.appendChild(displayScoreC);