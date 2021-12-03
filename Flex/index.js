class player{
    constructor(index)
    {
        this.index = index; 
        this.atTile = 0;
        this.pawn = document.getElementsByClassName("pawn" + index)[0];  
        this.pawn.style.display = "block"; 
    }
}

class tile
{
    constructor(div)
    {
        this.div = div; 
        this.goto = -1;
    }
}

class game
{
    constructor()
    {
        this.selectplayerDiv = document.getElementsByClassName("selectplayer")[0]; 
        this.winnerDiv = document.getElementsByClassName("winner")[0];
        this.playerturnDiv = document.getElementsByClassName("playerturn")[0];
        this.rollDiv = document.getElementsByClassName("roll")[0];
        this.mainDiv = document.getElementsByClassName("main")[0];
        this.boardDiv = document.getElementsByClassName("board")[0];
        this.boardoverlayDiv = document.getElementsByClassName("boardoverlay")[0];

        this.tile = []
        this.player = []
        this.playerTurn = (0)
    }

setupBoard()
{

}

setupGoto()
{

} 

start(amountOfPlayer)
{
   
}

moveToNextPlayer()
{

}

draw()
{

}

roll()
{

}

setPawn()
{

}

makeBoardDiv(x, y, tileDisplayNumber)
{

}

}

function init()
{
    game = new Game(); 
}
    let game;

