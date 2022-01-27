let game;

function init()
{
    game = new Game(); 
}
    
class Player
{
    constructor(index)
    {
        this.index = index; 
        this.atTile = 0;
        this.pawn = document.getElementsByClassName("pawn" + index)[0];  
        this.pawn.style.display = "block"; 
    }
}

class Tile
{
    constructor(div)
    {
        this.div = div; 
        this.goto = -1;
    }
}

class Game
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

        this.tiles = [];
        this.players = [];
        this.playerTurn = 0;
        this.setupBoard();
    }

    setupBoard()
    {
        let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 
            0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 
            0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 
            0, 1, 1, 1, 1, 1, 1, 1, 1, 1]

        let x = 11;
        let y = 12;
        let tileSize = 55;

        for (var i = 0; i < path.length; i++)
        {
            let cmd = path[i];
            if (cmd == 1)
            {
                x++;
            }
            else if (cmd == 3)
            {
                x--;
            }
            else if (cmd == 0)
            {
                y--;
            }
        
        let div = this.makeBoardDiv(x * tileSize, y * tileSize, i + 1)

        let tile = new Tile(div);
        this.tiles.push(tile); 
        }


        this.setupGoto(); 
    } 

    setupGoto()
    {
        let goto = [[6, 14], [16, 4], [17, 23], [27, 33], [29, 10], [38, 43], [39, 20], [45, 34]];


        for (var i = 0; i < goto.length; i++)
        {
            let element = goto[i]; 

            let start = element[0] - 1; 
            let end = element[1] - 1;
            
            let tile = this.tiles[start]; 
            tile.goto = end; 
        }
    } 

    start(amountOfPlayer)
    { 
        this.winnerDiv.style.display = "none";
        this.selectplayerDiv.style.display = "none";
        this.mainDiv.style.display = "block";

        let pawns = document.getElementsByClassName("pawn")
        for (var i = 0; i < pawns.length; i++)
        {
            pawns[i].style.display = "none";
        }

        this.player = [];

        //player aanmaken
        for (var i = 0; i < amountOfPlayer; i++)
        {
            let player = new Player(i);
            this.players.push(player);
        }

        // pawns alle 4 hide -> selectie class pawn
       
        //playerturn = -1
        this.playerTurn = -1;
        //eerste beurt starten
        this.moveToNextPlayer();

    }

    moveToNextPlayer()
    {
        //playerturn ophogen naar de volgende speler 
        this.playerTurn++;  
        
        if(this.playerTurn == this.players.length)
        {
            this.playerTurn = 0;
        }
        this.playerturnDiv.textContent = "player " + (this.playerTurn+1); 

        this.draw();
    }

    draw()
    {
        
        // pawn neerzetten op de huidige locatie van de speler
        for (var i = 0; i < this.players.length; i++)
        {
            let player = this.players[i];
            this.setPawn(i, player.atTile);
        }

        // setpawn
        
    }

    roll()
    {
        let gooien = Math.floor((Math.random() * 6) + 1);
        this.rollDiv.style.backgroundImage = "url('img/dice" + gooien + ".png')"; 

        let player = this.players[this.playerTurn];
        player.atTile += gooien;
        
        if (player.atTile >= 49){
            this.winnerDiv.style.display = "block"; 
            this.winnerDiv.textContent = "Player " + (this.playerTurn+1) + " Wins!"; 
            this.mainDiv.style.display = "none";
        }
        
        this.draw();

        let tile = this.tiles[player.atTile];
        if(tile.goto != -1)
        {
            player.atTile = tile.goto;
            this.draw();
        }
        this.moveToNextPlayer(); 
    }

    setPawn(playerI, atTile)
    {
        let tile = this.tiles[atTile];
        let pawn = this.players[playerI].pawn; 

        pawn.style.left = tile.div.style.left; 
        pawn.style.top = tile.div.style.top;
    }

    makeBoardDiv(x, y, tileDisplayNumber)
    {
        let div = document.createElement("div");
        
        div.className = "tile"; 
        div.style.left = x + "px"; 
        div.style.top = y + "px"; 
        div.textContent = tileDisplayNumber; 

        this.boardDiv.appendChild(div);

        return div; 
    }
}


