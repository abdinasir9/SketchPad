let click = true;

function populateBoard(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${size},1fr)`;
board.style.gridTemplateRows = `repeat(${size},1fr)`;

let amount = size * size ;
if(click){
for (let i = 0; i < amount; i++){
    let square = document.createElement('div');
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "black"
        console.log('this should be black')
    });
    let reset = document.querySelector('.reset')
    reset.addEventListener('click', () => {
        square.style.backgroundColor = "white"
        console.log('this should be black')
    });
    // let randomColor = document.querySelector('.random');
    // randomColor.addEventListener('click', () => {
    //     square.addEventListener('mouseover', () => {
    //         square.style.backgroundColor = getNewColor()
    //         console.log('this should be random')
    //     });
    // })


    board.append(square)
    console.log("appended")
}
}};

function getNewColor(){
    let symbols = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    return color
}


function changeSize(input){
    if(input > 100){
        alert(`number has to be less than 100`)
        return
    }
    populateBoard(input)
    
}

// Changes your click variable from true to false, is listening to the element with board class
let mouseClick = document.querySelector("body");
mouseClick.addEventListener("click", () => {
  click = !click;
  console.log(`i was clicked`, click);
});
//End of function above 

populateBoard(50);