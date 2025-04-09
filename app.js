
// fatch HTML attributes

const inputSubmit = document.getElementById('strGame-btn');
const inputFeald = document.getElementById('user-input');
const gameFeald = document.getElementById('game');
let player= document.querySelector('#player');
let boxes = document.querySelectorAll(".element");
let user1 = "";
let user2 = "";

// game winner conditions define

    const winConditions = [
                            [0,1,2],
                            [0,3,6],
                            [0,4,8],
                            [1,4,7],
                            [2,5,8],
                            [2,4,6],
                            [3,4,5],
                            [6,7,8]
                           ];

  // player one ki paari ke liye

   let playerTurn = true;
  
  //player fatch

   inputSubmit.addEventListener("click",function(event){
   event.preventDefault();
   user1= document.getElementById('user1').value;
   user2= document.getElementById('user2').value;
   
   // input feald jump to game feald

   if(playerTurn){
    player.innerHTML=`paari of ${user1}`;
    inputFeald.style.display="none";
    gameFeald.style.display="block";
   }
 });

// track game element and game play functionality

boxes.forEach((element) => {
      element.addEventListener("mouseover",()=>{
        element.style.backgroundColor="#FFFF00"
      })
      element.addEventListener("mouseout",()=>{
        element.style.backgroundColor=""
      })

      element.addEventListener("click",() => {
       if(playerTurn){
        element.innerText="O";
        playerTurn = false;
        player.innerHTML=`paari of ${user2}`;
       }
       else{
        element.innerText="X";
        playerTurn = true;
        player.innerHTML=`paari of ${user1}`;
       }
       element.disabled= true;
       checkWinner();
      })
});

//winner check

function checkWinner()
{
  for (let winCondition of winConditions) 
  {
    let condition1 = boxes[winCondition[0]].innerText
    let condition2 = boxes[winCondition[1]].innerText
    let condition3 = boxes[winCondition[2]].innerText
    
       if(condition1 != "" && condition2 != "" && condition3 != "")
        {
              if(condition1 === condition2 && condition2 === condition3)
               {
                 gameFeald.style.display="none";
                
                 showWinner();
               }

        }     
  }
};

// game reset function

const resetGame = document.querySelector('#reset-btn');
resetGame.addEventListener("click", () => {
  for (let  box of boxes) {
    box.innerText="";
    box.disabled =false;
  }
})

// dra game


//winner show

function showWinner(){
        
      const winnerDiv = document.getElementById("winner");
            winnerDiv.style.scale="1";

      let winner = document.getElementById("winner-player");
          winner.classList='animation';

      if(playerTurn== true){
       winner.innerText=` Congratulation winner is ${user2}`;
      }
       else{
       winner.innerText=` Congratulation winner is ${user1}`;
      }
}

// new game start btn

const startBtn = document.querySelector('.newGame-btn');
 startBtn.addEventListener("click", ()=>{
  window.location.reload();
 });