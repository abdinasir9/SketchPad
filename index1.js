let colorOptions = ["black", "red", "white","reset"];
let click = true;
let color = "black";
let noColor = undefined;

//this function takes an an argument for the size and creates a board with the NxN
function populateBoard(size) {
  const board = document.querySelector(".board");
  const squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    if(color == 'reset'){
      squares.style.backgroundColor = 'white'
    }
    else{
    square.addEventListener("mouseover", () => {
      if (click) {
        board.style.cursor = 'crosshair'
        square.style.backgroundColor = color;
        console.log(`You chose ${color}`);
      } else {
        square.style.backgroundColor = noColor;
        console.log(`You chose ${color}`);
        board.style.cursor = 'default'
      }
    });

    board.append(square);
    console.log("appended");

  }}
}

//End of function

// this function allows us to change the size of our board by
//taking the values from input while they are less than 100
function changeSize(input) {
  if (input > 100) {
    alert(`number has to be less than 100`);
    return;
  }
  populateBoard(input);
}
//End of function

//this function goes through our array and gets compares it with the value of selected button and stores
//for later use
function colorSquare(choice) {
  console.log(choice);
  colorOptions.forEach((option) => {
    if (option == choice) {
      color = option;
      console.log("we got a color");
      return color;
    }
  });
}


// function resetBoard(){
//   const board = document.querySelector(".board");
//   let squares = board.querySelectorAll("div");
//   squares.style.backgroundColor = color;
//     console.log('board reset')
// }
// Changes your click variable from true to false, is listening to the element with board class
let mouseClick = document.querySelector(".board");
mouseClick.addEventListener("mousedown", () => {
  click = !click;
  console.log("you clicked", click);
});
//End of function above

if(click = false){
  style.cursor = 'auto'
  console.log('cursor change')
}


  

  
  populateBoard(25);
