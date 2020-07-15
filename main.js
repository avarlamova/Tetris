//creating a grid for game
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = COLUMNS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE,BLOCK_SIZE);

function getBoard() {
    return Array.from(
    {length: ROWS}, () => Array(COLUMNS).fill(0)
    )
}

//creating piece
class Piece {
    x;
    y;
    color;
    shape;
    type;

    constructor(ctx) {
      this.ctx = ctx;
      this.spawn(4,0);
    }
    
  spawn(x,y) {
    const tetrominoType = this.randomize();
    this.x = x;
    this.y = y;
    this.shape = SHAPES[tetrominoType];
    this.color = COLORS[tetrominoType];  
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

let board = getBoard();
let piece = new Piece(ctx);

function play() {
    piece.draw();
    board.piece = piece;
  }

//making pieces move
  moves = {
    [37]:  a => ({ ...a, x: a.x - 1 }), //left
    [39]: a => ({ ...a, x: a.x + 1 }), //right
    [38]: a => ({ ...a, y: a.y + 1 }) //up
  };

document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37:
        piece.spawn(piece.x-1,piece.y);
        piece.draw();
        break;
        case 39:
          console.log(event.keyCode)
          break;
        case 38:
          console.log(event.keyCode)
          break;
        default:
        alert( "Нет таких значений" );
      }
    }
  );

//when game is over
function gameOver() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 100, 200);
  ctx.font = '1px Arial';
  ctx.fillStyle = 'yellow';
  ctx.fillText('GAME OVER', 2, 7)
}