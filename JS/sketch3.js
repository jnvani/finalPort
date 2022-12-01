// variables for text

let txtWelcome , txtInst, txtResult  

// button for games and RPS
let btn1game, btn3Game, btn5Game , btnR, BtnP, BtnS

// button end the game and replay

let btnReplay , btnEndGame

// variable for computerChoice

let compOpt;


function setup() {
 
  createCanvas(400, 400);
  txtWelcome = " ROCK PAPER SCISSORS "
 
  
  txtInst= "choose the game format"
  
  txtResult = ""
 
  // buttons for 1 3 5 games
 
  btn1Game = createButton('Single Game')
  btn1Game.position(25, 150)
  btn1Game.style('width', '100px')
  btn1Game.mousePressed( NewGame )
 
  btn3Game = createButton('Best of Three')
  btn3Game.position(150, 150)
  btn3Game.style('width', '100px')
  btn3Game.mousePressed( NewGame1 )
  btn3Game.value()
  
  btn5Game = createButton('Best of Five')
  btn5Game.position(275, 150)
  btn5Game.style('width', '100px')
  btn5Game.mousePressed( NewGame2 )
  btn5Game.value()
 
  // button for R P S
 
  btnR = createButton('Rock')
  btnR.position(25, 180)
  btnR.style('width', '100px')
  btnR.hide()
  btnR.mousePressed( CompareRock)
 
  btnP = createButton('Paper')
  btnP.position(150, 180)
  btnP.style('width', '100px')
  btnP.hide()
  btnP.mousePressed( ComparePaper )
 
  btnS = createButton('Scissors')
  btnS.position(275, 180)
  btnS.style('width', '100px')
  btnS.hide()
  btnS.mousePressed( CompareScissors )
 
  // button for replay or end game
 
  btnReplay = createButton('Replay')
  btnReplay.position(150,250)
  btnReplay.style('width', '100px')
  btnReplay.hide()
  btnReplay.mousePressed(NewGame)
  
  btnEndGame = createButton('Endgame')
  btnEndGame.position(200,350)
  btnEndGame.style('width', '100px')
  btnEndGame.hide()
  btnEndGame.mousePressed(Reset)
  //reset random number compOpt
 
 
}

function draw() {
  background("#E0BE59");
 
  text( txtWelcome, 135, 60)
  text( txtInst, 145, 90)
  text( txtResult , 155, 300)
 
 
}

function showRPS()
{
 
  txtInst = " choose between rock,  paper, scissors"
  txtResult = ""
 
  //hide game options
  btn1Game.hide()
  btn3Game.hide()
  btn5Game.hide()
  
  //show Rock paper scissors buttons
 
  btnR.show()
  btnP.show()
  btnS.show()
  btnReplay.hide() 
  btnEndGame.hide()
}

function showReplayEnd()
{
 
  txtInst = " choose between rock,  paper, scissors"
  txtResult = ""
 
  //hide game options
  btn1Game.hide()
  btn3Game.hide()
  btn5Game.hide()
  
  //show Rock paper scissors buttons
 
  btnR.show()
  btnP.show()
  btnS.show()
  btnReplay.hide() 
  btnEndGame.show()
}

function showReplay()
{
 
  txtInst = " choose between rock,  paper, scissors"
  txtResult = ""
 
  //hide game options
  btn1Game.hide()
  btn3Game.hide()
  btn5Game.hide()
  
  //show Rock paper scissors buttons
 
  btnR.show()
  btnP.show()
  btnS.show()
  btnReplay.show() 
  btnEndGame.hide()
}

function HideRPS()
{
 createCanvas(400, 400);
  txtWelcome = " ROCK PAPER SCISSORS "
 
  
  txtInst= "choose the game format"
  
  txtResult = ""
  
  
 
  //hide game options
  btn1Game.show()
  btn3Game.show()
  btn5Game.show()
  btnReplay.hide() 
  
  //show Rock paper scissors buttons
 
  btnR.hide()
  btnP.hide()
  btnS.hide()
  btnEndGame.hide()
  
}

function CompareRock()
  
{  
  {
    
      showReplayEnd();
    
  }
    if(compOpt == 1)
      {
       txtResult = "It's a Draw"  
      }
    else if(compOpt == 2)
      {
       txtResult = "Computer Won ! "  
      }
    else
      {
        txtResult = "You Won !"
      }  
    

  }

function ComparePaper()
{  
  {
    showReplayEnd();
    }
   if(compOpt == 1)
      {
       txtResult = "Computer Won"  
      }
    else if(compOpt == 2)
      {
       txtResult = "It's A draw "  
      }
    else
      {
        txtResult = "You Won !"
      }  
  

}

function CompareScissors()
{  
  {
    
      showReplayEnd();
    
  }
  if(compOpt == 1)
      {
       txtResult = "Computer Won"  
      }
    else if(compOpt == 2)
      {
       txtResult = "It's A draw "  
      }
    else
      {
        txtResult = "You Won !"
      }  
  
}


function CompareRock1()
  
{  
  {
    
      showReplay();
    
  }
    if(compOpt == 1)
      {
       txtResult = "It's a Draw"  
      }
    else if(compOpt == 2)
      {
       txtResult = "Computer Won ! "  
      }
    else
      {
        txtResult = "You Won !"
      }  
    

  }

function ComparePaper1()
{  
  {
    showReplay();
    }
   if(compOpt == 1)
      {
       txtResult = "Computer Won"  
      }
    else if(compOpt == 2)
      {
       txtResult = "It's A draw "  
      }
    else
      {
        txtResult = "You Won !"
      }  
  

}

function CompareScissors1()
{  
  {
    
      showReplay();
    
  }
  if(compOpt == 1)
      {
       txtResult = "Computer Won"  
      }
    else if(compOpt == 2)
      {
       txtResult = "It's A draw "  
      }
    else
      {
        txtResult = "You Won !"
      }  
  
}



function NewGame()
{
 
  compOpt = round(random (0.5, 3.5) )
  showRPS();
 
}

function NewGame1()
{
 
  compOpt = round(random (0.5, 3.5) )
  showReplay();
  
 
}

function NewGame2()
{
 
  compOpt = round(random (0.5, 3.5) )
  showRPS();
 
}
function Reset()
{
 
  compOpt = round(random (0.5, 3.5) )
  HideRPS();
 
}
function Bof3()
{ 
   for (i=0; i<3; i++)
  loop(i);
}