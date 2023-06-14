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

const popupRef = document.querySelector(".popup");
const putplayerwinner = document.getElementById("winner");

putplayerone.innerHTML = sessionStorage.getItem(Pyer1);
putplayertwo.innerHTML = sessionStorage.getItem(Pyer2);

/*-----------------------------------LOGICA DEL JUEGO ABREVIADA--------------------------------------*/

let side = true;

const casillas = new Array(9).fill(null);

// Logica del juego

const slotList = document.querySelectorAll(".casilla");
slotList.forEach((slot, i) => {
  slot.addEventListener(
    "click",
    (event) => {
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
      ) {
        popupPlayer();
      }
      tieCheck();
      side = !side;
      getTurnSide();
    },
    { once: true }
  );
});

// Comprobar el Ganador

const winnerCheck = (a, b, c) => {
  if (
    casillas[a] == casillas[b] &&
    casillas[c] == casillas[b] &&
    casillas[a] != null
  )
    return true;
  return false;
};

// Comprobar el Empate

const tieCheck = () => {
  if (
    casillas[0] != null &&
    casillas[1] != null &&
    casillas[2] != null &&
    casillas[3] != null &&
    casillas[4] != null &&
    casillas[5] != null &&
    casillas[6] != null &&
    casillas[7] != null &&
    casillas[8] != null
  ) {
    return (
      popupRef.classList.remove("hide"), (putplayerwinner.innerHTML = "Empate")
    );
  }
};

const popupPlayer = () => {
  popupRef.classList.remove("hide");
  putplayerwinner.innerHTML = `El ganador es: ${
    side ? sessionStorage.getItem(Pyer1) : sessionStorage.getItem(Pyer2)
  }`;
};

const getTurnSide = () => {
  const userOneTurn = document.getElementById("turnside1");
  const userTwoTurn = document.getElementById("turnside2");
  if (side == true) {
    userOneTurn.style.display = "block";
    userTwoTurn.style.display = "none";
  } else {
    userOneTurn.style.display = "none";
    userTwoTurn.style.display = "block";
  }
};
