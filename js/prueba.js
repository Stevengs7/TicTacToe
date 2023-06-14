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

if (firstWin[0] == "X" && firstWin[1] == "X" && firstWin[2] == "X") {
  console.log("Gana X");
} else if (firstWin[0] == "O" && firstWin[1] == "O" && firstWin[2] == "O") {
  console.log("Gana O");
}

if (secondWin[6] == "X" && secondWin[7] == "X" && secondWin[8] == "X") {
  console.log("Gana X");
} else if (secondWin[6] == "O" && secondWin[7] == "O" && secondWin[8] == "O") {
  console.log("Gana O");
}

if (thirdWin[6] == "X" && thirdWin[7] == "X" && thirdWin[8] == "X") {
  console.log("Gana X");
} else if (thirdWin[6] == "O" && thirdWin[7] == "O" && thirdWin[8] == "O") {
  console.log("Gana O");
}

if (fourthWin[0] == "X" && fourthWin[3] == "X" && fourthWin[6] == "X") {
  console.log("Gana X");
} else if (fourthWin[0] == "O" && fourthWin[3] == "O" && fourthWin[6] == "O") {
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
} else if (eighthWin[2] == "O" && eighthWin[4] == "O" && eighthWin[6] == "O") {
  console.log("Gana O");
}

/*
const winnerCheck = () => {
  if (
    firstWin[0] == firstWin[1] &&
    firstWin[0] == firstWin[2] &&
    firstWin[0] != ""
  ) {
    console.log("0 El ganador es: " + firstWin[0]);
  } else if (
    secondWin[3] == secondWin[4] &&
    secondWin[3] == secondWin[5] &&
    secondWin[3]
  ) {
    console.log("1 El ganador es: " + secondWin[3]);
  } else if (
    thirdWin[6] == thirdWin[7] &&
    thirdWin[6] == thirdWin[8] &&
    thirdWin[6]
  ) {
    console.log("2 El ganador es: " + thirdWin[6]);
  } else if (
    fourthWin[0] == fourthWin[3] &&
    fourthWin[0] == fourthWin[6] &&
    fourthWin[0]
  ) {
    console.log("3 El ganador es: " + fourthWin[0]);
  } else if (
    fifthWin[1] == secondWin[4] &&
    fifthWin[1] == fifthWin[7] &&
    fifthWin[1]
  ) {
    console.log("4 El ganador es: " + fifthWin[1]);
  } else if (
    sixthWin[2] == sixthWin[5] &&
    sixthWin[2] == sixthWin[8] &&
    sixthWin[2]
  ) {
    console.log("5 El ganador es: " + sixthWin[2]);
  } else if (
    seventhWin[0] == seventhWin[4] &&
    seventhWin[0] == seventhWin[8] &&
    seventhWin[0]
  ) {
    console.log("6 El ganador es: " + seventhWin[0]);
  } else if (
    eighthWin[2] == eighthWin[4] &&
    eighthWin[2] == eighthWin[6] &&
    eighthWin[2]
  ) {
    console.log("7 El ganador es: " + eighthWin[2]);
  }
}; */
