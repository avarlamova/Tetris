//creating a grid for game
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = columns * block_size;
ctx.canvas.height = rows * block_size;

ctx.scale(block_size,block_size);

for (i=0;i<121;i++) {
let x = 10;
let y = 10; 
ctx.fillRect(x, x+10, y, y+10);
x+=15;
y+=15;
}

function getBoard() {
    return Array.from(
    {length: rows}, () => Array(columns).fill(0)
    )
}

console.log(getBoard())