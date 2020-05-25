const width = 10;
const height = 20;
const elementssize = 30;
let grid = new Array (20);
let A = [0,0,1,
    0,0,1,
    0,1,1];

let B = [1,0,0,
    1,0,0,
    1,1,0];

let C = [0,0,0,
    0,1,0,
    1,1,1];

let D = [0,0,0,
    0,1,1,
    1,1,0];

let E = [0,0,0,
    1,1,0,
    0,1,1];

let F = [1,1,0,
    1,1,0,
    0,0,0];

let G = [0,0,0,
    1,1,1,
    0,0,0];

    //creating elements

    for (y=0;y<height;y++){
        for (x=0;x<width;x++) {
            let square = document.createElement(div);
            square.setAttribute("id", "square_x" + x + "y" + y);
            document.body.append(square)
        }
    }