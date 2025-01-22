const flex=document.querySelector(".flex_stuff");
const rock=flex.querySelector(".rock");
const paper=flex.querySelector(".paper");
const sciccors=flex.querySelector(".sciccors");
const section=document.querySelector(".wins-losses-ties");
const wins=section.querySelector("#wins");
const spanWins=wins.querySelector("#spanWins");
const losses=section.querySelector("#losses");
const spanLosses=losses.querySelector("#spanLosses");
const ties=section.querySelector("#ties");
const spanTies=ties.querySelector("#spanties");
const button=document.querySelector("button");
const lateScoresDisplay=document.querySelector("#display");
const displayAll=document.querySelector(".display-all");
const whereHeaderIs=displayAll.querySelector("h5");
const wherePIs=displayAll.querySelector(".p");
const userClick=wherePIs.querySelector("#userClick");
const computerRandomChoice=wherePIs.querySelector("#computerRandom");


//Order of computer
function randm(){
  let computerRandom=Math.floor(Math.random()*3);
  let computerChoice=["✊","✋","✌"];
  return computerChoice[computerRandom];
}


function rockDlp(){
  rock.addEventListener('click', ()=>{
    displayAll.style.display="block";
    let computerChoice=randm();
    if(rock.textContent === computerChoice)
    {
    whereHeaderIs.textContent="Tie Game.";
    spanTies.textContent++;
    } else if(rock.textContent && computerChoice === '✋')
    {
    whereHeaderIs.textContent="Computer Wins.";
    spanLosses.textContent++
    } else{
    whereHeaderIs.textContent="You Win.";
    spanWins.textContent++;
    }
    userClick.textContent='✊';
    userClick.style.fontSize="26px";
    computerRandomChoice.textContent=`${computerChoice}`;
    computerRandomChoice.style.fontSize="26px";
  })
}


function paperDlp(){
  paper.addEventListener('click', ()=>{
    displayAll.style.display="block";
    let computerChoice=randm();
    if(paper.textContent === computerChoice)
    {
    whereHeaderIs.textContent="Tie Game.";
    spanTies.textContent++;
    } else if(paper.textContent && computerChoice === '✊')
    {
    whereHeaderIs.textContent="You Win.";
    spanWins.textContent++
    } else{
    whereHeaderIs.textContent="Computer Win.";
    spanLosses.textContent++;
    }
    userClick.textContent='✋';
    userClick.style.fontSize="26px";
    computerRandomChoice.textContent=`${computerChoice}`;
    computerRandomChoice.style.fontSize="26px";
  })
}


function sciccorsDlp(){
  sciccors.addEventListener('click', ()=>{
    displayAll.style.display="block";
    let computerChoice=randm();
    if(sciccors.textContent === computerChoice)
    {
    whereHeaderIs.textContent="Tie Game.";
    spanTies.textContent++;
    } else if(sciccors.textContent && computerChoice === '✊')
    {
    whereHeaderIs.textContent="Computer Wins.";
    spanLosses.textContent++
    } else{
    whereHeaderIs.textContent="You Win.";
    spanWins.textContent++;
    }
    userClick.textContent='✌';
    userClick.style.fontSize="26px";
    computerRandomChoice.textContent=`${computerChoice}`;
    computerRandomChoice.style.fontSize="26px";
  })
  
}

button.addEventListener("click", ()=>{
  spanLosses.textContent=0;
  spanTies.textContent=0;
  spanWins.textContent=0;
})
paperDlp()
rockDlp()
sciccorsDlp()
localStorage.setItem('rockStorage', `${spanLosses.textContent},${spanTies.textContent}, ${spanWins.textContent}`)
console.log()
lateScoresDisplay.addEventListener('click', ()=>{
  inputOfAllTheSet=[JSON.stringify]
  spanLosses.textContent=inputOfAllTheSet;
  spanTies.textContent=inputOfAllTheSet
  spanWins.textContent=inputOfAllTheSet
})
//Order of Game