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
      this.spawn();
    }
    
  spawn() {
    const tetrominoType = this.randomize();
    this.shape = SHAPES[tetrominoType];
    this.color = COLORS[tetrominoType];  
    this.x = 4;
    this.y = 0;
    }


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

function play() {
    let board = getBoard();
    let piece = new Piece(ctx);
    piece.draw();
    board.piece = piece;
  }

//making pieces move
  moves = {
    [KEYCODES.LEFT]:  a => ({ ...a, x: a.x - 1 }),
    [KEYCODES.RIGHT]: a => ({ ...a, x: a.x + 1 }),
    [KEYCODES.UP]:    a => ({ ...a, y: a.y + 1 })
  };

document.addEventListener('keydown', event => {
    if (moves[event.keyCode]) {  
      event.preventDefault();
      let a = moves[event.keyCode](board.piece);
      if (board.valid(a)) {    
        board.piece.move(a);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
        
        board.piece.draw();
      }
    }
  });


//when game is over
function gameOver() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 100, 200);
  ctx.font = '1px Arial';
  ctx.fillStyle = 'yellow';
  ctx.fillText('GAME OVER', 2, 7)
}