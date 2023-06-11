
const casillas = document.getElementsByClassName("casilla");

let side = true;

for (const piece of casillas) {
  piece.addEventListener("click", () => {
    if (piece.innerHTML == "") {
      if (side) {
        piece.innerHTML = "X";
      } else {
        piece.innerHTML = "O";
      }
      side = !side;
    }
    winnerCheck(casillas);
  });
}




if (thirdWin[6] == "X" && thirdWin[7] == "X" && thirdWin[8] == "X") {
    console.log("Gana X");
  } else if (thirdWin[6] == "O" && thirdWin[7] == "O" && thirdWin[8] == "O") {
    console.log("Gana O");
  }

  if (fourthWin[0] == "X" && fourthWin[3] == "X" && fourthWin[6] == "X") {
    console.log("Gana X");
  } else if (
    fourthWin[0] == "O" &&
    fourthWin[3] == "O" &&
    fourthWin[6] == "O"
  ) {
    console.log("Gana O");
  }

  if (fifthWin[1] == "X" && fifthWin[4] == "X" && fifthWin[7] == "X") {
    console.log("Gana X");
  } else if (fifthWin[1] == "O" && fifthWin[4] == "O" && fifthWin[7] == "O") {
    console.log("Gana O");
  }

  if (sixthWin[2] == "X" && sixthWin[5] == "X" && sixthWin[8] == "X") {
    console.log("Gana X");
  } else if (sixthWin[2] == "O" && sixthWin[5] == "O" && sixthWin[8] == "O") {
    console.log("Gana O");
  }

  if (seventhWin[0] == "X" && seventhWin[4] == "X" && seventhWin[8] == "X") {
    console.log("Gana X");
  } else if (
    seventhWin[0] == "O" &&
    seventhWin[4] == "O" &&
    seventhWin[8] == "O"
  ) {
    console.log("Gana O");
  }

  if (eighthWin[2] == "X" && eighthWin[4] == "X" && eighthWin[6] == "X") {
    console.log("Gana X");
  } else if (
    eighthWin[2] == "O" &&
    eighthWin[4] == "O" &&
    eighthWin[6] == "O"
  ) {
    console.log("Gana O");
  }