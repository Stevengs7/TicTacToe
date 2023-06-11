function mostrar() {
  document.getElementById("bando").style.display = "block";
  document.getElementById("empezar").style.display = "none";
  document.getElementById("logo").style.display = "none";
}

function playAudio() {
  document.getElementById("myaudio").play();
}

function showPlayerOne() {
  document.getElementById("playerone").style.display = "block";
  document.getElementById("bando").style.display = "none";
}

function showPlayertTwo() {
  document.getElementById("playertwo").style.display = "block";
  document.getElementById("playerone").style.display = "none";
}

/*--------------------------------------------------------------------------------------*/
let playerOne = "";
let playerTwo = "";
const Pyer1 = "p1";
const Pyer2 = "p2";

let input1 = document.getElementById("username");
let input2 = document.getElementById("username2");

input1.addEventListener("input", getplayerOne);
input2.addEventListener("input", getplayerTwo);

function getplayerOne() {
  sessionStorage.setItem(Pyer1, document.getElementById("username").value);
}

function getplayerTwo() {
  sessionStorage.setItem(Pyer2, document.getElementById("username2").value);
}
