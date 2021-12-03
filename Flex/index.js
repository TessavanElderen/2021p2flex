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
        this.selectplayerDiv = document.getElementsByClassName("selectplayer"); 
        this.winnerDiv = document.getElementsByClassName("winner");
        this.playerturnDiv = document.getElementsByClassName("playerturn");
        this.rollDiv = document.getElementsByClassName("roll");
        this.mainDiv = document.getElementsByClassName("main");
        this.boardDiv = document.getElementsByClassName("board");
        this.boardoverlayDiv = document.getElementsByClassName("boardoverlay");

        this.tile = []
        this.player = []
        this.playerTurn = (0)

    }
}
