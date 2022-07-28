//Chessboard

// First attempt
let str = " #  #  #  #\n#  #  #  # \n #  #  #  #\n#  #  #  # \n #  #  #  #\n#  #  #  # \n #  #  #  #\n#  #  #  #";
console.log(str);
console.log("---------------------------- FINAL RESULT --------------------------");

// console.log(str);

let size = 8;
let board = ""; //board template

for (let i = 1; i <= size; i++) {
    
  // inner loop for columns
  for (let j = 1; j <= size; j++) {

    if ((i + j) % 2 == 0) { // check if col is even
      board += " ";
    } else { // if col is odd
      board += "#";
    }
  }
  board += "\n"; // jump to next row
}
console.log(board);