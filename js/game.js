//Nombre players
let playerOne = "";
let playerTwo = "";
let winner = "";
//Keys
const Pyer1 = "p1";
const Pyer2 = "p2";
const wner = "playerwinner";

// Abreviaciones
const putplayerone = document.getElementById("putplayer-one");
const putplayertwo = document.getElementById("putplayer-two");

const newgame = document.getElementById("new-game");

const popupRef = document.querySelector(".popup");
const putplayerwinner = document.getElementById("winner");

const newGame = () => {
  popupRef.classList.add("hide");
  document.querySelectorAll("button").innerHTML(null);
};

putplayerone.innerHTML = sessionStorage.getItem(Pyer1);
putplayertwo.innerHTML = sessionStorage.getItem(Pyer2);

/*-----------------------------------LOGICA DEL JUEGO ABREVIADA--------------------------------------*/

let side = true;
const casillas = new Array(9).fill(null);

const slotList = document.querySelectorAll("button");
slotList.forEach((slot, i) => {
  slot.addEventListener("click", (event) => {
    if (
      side == true &&
      slot.innerHTML == "" &&
      slot.innerHTML != "O" &&
      slot.innerHTML != "X"
    ) {
      event.target.innerHTML = "X";
    } else if (slot.innerHTML != "X") {
      event.target.innerHTML = "O";
    }
    casillas[i] = side;
    if (
      winnerCheck(0, 1, 2) ||
      winnerCheck(3, 4, 5) ||
      winnerCheck(6, 7, 8) ||
      winnerCheck(0, 3, 6) ||
      winnerCheck(1, 4, 7) ||
      winnerCheck(2, 5, 8) ||
      winnerCheck(0, 4, 8) ||
      winnerCheck(2, 4, 6)
    )
      popupPlayer();
    side = !side;
  });
});

/* setTimeout(() => {
const getEmpate = () => {
  let tie;
  for (const casilla of casillas) {
    if (casilla.innerHTML == false) {
      if (tie == 8) {
        putplayerwinner.innerHTML = "El juego termina en empate";
      }
    }
    empate++;
  }
};
}) */

const winnerCheck = (a, b, c) => {
  if (
    casillas[a] == casillas[b] &&
    casillas[c] == casillas[b] &&
    casillas[a] != null
  )
    return true;
  return false;
};

const popupPlayer = () => {
  popupRef.classList.remove("hide");
  putplayerwinner.innerHTML = `El ganador es: ${
    side ? sessionStorage.getItem(Pyer1) : sessionStorage.getItem(Pyer2)
  }`;
};
/*-------------------------Comprobar el Ganador--------------------------*/

/* const winnerCheck = () => {
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
};
 */