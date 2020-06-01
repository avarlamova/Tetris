//creating a grid for game
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = columns * block_size;
ctx.canvas.height = rows * block_size;

ctx.scale(block_size,block_size);

//create gameboard
function getBoard() {
    return Array.from(
    {length: rows}, () => Array(columns).fill(0)
    )
}

//console.table(getBoard())

//creating piece
class Piece {
    x;
    y;
    color;
    shape;
    ctx;
    
    constructor(ctx) {
     this.ctx = ctx;
      this.spawn();
    }
    
    spawn() {
      this.color = 'green';
      this.shape = [
        [1, 0, 0], 
        [1, 2, 2], 
        [0, 0, 0]
      ];
      
      // Starting position.
      this.x = 5;
      this.y = 5;
    }


  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        // this.x, this.y gives the left upper position of the shape
        // x, y gives the position of the block in the shape
        // this.x + x is then the position of the block on the board
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }
  }


  function play() {
    let piece = new Piece(ctx);
    piece.draw();
    board.piece = piece;
  }

  play()