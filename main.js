//creating a grid for game
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = columns * block_size;
ctx.canvas.height = rows * block_size;

ctx.scale(block_size,block_size);

function getBoard() {
    return Array.from(
    {length: rows}, () => Array(columns).fill(0)
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
    const  type = this.randomizeTetrominoType(colors.length);
this.shape = shapes[type];
this.color = colors[type];
      
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

  randomizeTetrominoType(noOfTypes) {
    return Math.floor(Math.random() * noOfTypes);
  }
  }


  function play() {
    getBoard();
    let piece = new Piece(ctx);
    piece.draw();
  //board.piece = piece;
  }
play()
