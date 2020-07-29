//creating a grid for game
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = COLUMNS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE,BLOCK_SIZE);

//creating playboard
class Board {
    piece;
    grid;

    constructor(ctx) {
      this.ctx = ctx;
    }

    getBoard(){
    return Array.from(
    {length: ROWS}, () => Array(COLUMNS).fill(0)
    )
    }

    clearBoard() {
    this.grid = this.getBoard;
    }
}

//creating piece
class Piece {
    x;
    y;
    color;
    shape;
    type = this.randomize();

    constructor(ctx) {
      this.ctx = ctx;
      this.spawn(4,0);
    }
    
  spawn(x,y) {
    this.x = x;
    this.y = y;
    this.shape = SHAPES[this.type];
    this.color = COLORS[this.type];  
    };

  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  randomize() {
    return Math.floor(Math.random() * SHAPES.length);
  }

  }

let board = new Board;
let piece = new Piece (ctx);

function play() {
    board.clearBoard();
    piece.draw();
    board.piece = piece;
  }

document.addEventListener('keydown', event => {
      piece = board.piece;
      switch (event.keyCode) {

        case 37:
        piece.spawn(piece.x-1,piece.y);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
        piece.draw();
        break;

        case 39:
        piece.spawn(piece.x + 1,piece.y);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
        piece.draw();
        break;

        case 38:
        piece.spawn(piece.x,piece.y + 1);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
        piece.draw();
        break;

        case 27:
        gameOver();
        break;
      }
    }
  );

//when game is over
function gameOver() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 100, 200);
  ctx.font = '1px Arial';
  ctx.fillStyle = 'yellow';
  ctx.fillText('GAME OVER', 2, 7)
}