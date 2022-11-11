// Botão
const button = document.querySelector("button");
// Pegar os dados da pontuação para mostrar
const player1Score = document.querySelector("#pontos_player_1");
const player2Score = document.querySelector("#pontos_player_2");
//Placa principal
const board = document.querySelector("#tabuleiro");
const cells = document.querySelectorAll(".casa");

// Array com 9 posições
let gameArray = new Array(9);
// Variável pra salvar o turno do jogador
let playerTurn = 1;
// Variável pra salvar os pontos do jogador
let player1Points = 0;
let player2Points = 0;



// Função para preencher o array com X ou O
function fillArray(position) {
  if (playerTurn === 1) {
    gameArray[position] = "X";
    playerTurn = 2;
  } else {
    gameArray[position] = "O";
    playerTurn = 1;
  }
}



// Função para verificar se o jogo acabou
function checkGameOver() {
  if (checkWin()) {
    if (playerTurn !== 1) {
      player1Points++;
      const span = document.createElement("span");
      span.innerHTML = player1Points;
      player1Score.innerHTML = `
        Player 1
        <span>${player1Points}</span>
        points
      `;
      alert("Jogador 1 Venceu");
    } else {
      player2Points++;
      const span = document.createElement("span");
      span.innerHTML = player2Points;
      player2Score.innerHTML = `
        Player 2
        <span>${player2Points}</span>
        points
      `;
      alert("Jogador 2 Venceu");
    }
    clearGame();
  } else if (checkDraw()) {
    alert("Empate");
    clearGame();
  }
}

// Função para verificar se o jogo acabou com uma vitória
function checkWin() {
  if (
    gameArray[0] === gameArray[1] &&
    gameArray[1] === gameArray[2] &&
    gameArray[0] !== undefined
  ) {
    return true;
  } else if (
    gameArray[3] === gameArray[4] &&
    gameArray[4] === gameArray[5] &&
    gameArray[3] !== undefined
  ) {
    return true;
  } else if (
    gameArray[6] === gameArray[7] &&
    gameArray[7] === gameArray[8] &&
    gameArray[6] !== undefined
  ) {
    return true;
  } else if (
    gameArray[0] === gameArray[3] &&
    gameArray[3] === gameArray[6] &&
    gameArray[0] !== undefined
  ) {
    return true;
  } else if (
    gameArray[1] === gameArray[4] &&
    gameArray[4] === gameArray[7] &&
    gameArray[1] !== undefined
  ) {
    return true;
  } else if (
    gameArray[2] === gameArray[5] &&
    gameArray[5] === gameArray[8] &&
    gameArray[2] !== undefined
  ) {
    return true;
  } else if (
    gameArray[0] === gameArray[4] &&
    gameArray[4] === gameArray[8] &&
    gameArray[0] !== undefined
  ) {
    return true;
  } else if (
    gameArray[2] === gameArray[4] &&
    gameArray[4] === gameArray[6] &&
    gameArray[2] !== undefined
  ) {
    return true;
  } else {
    return false;
  }
}

// Função para verificar se o jogo acabou com um empate
function checkDraw() {
  let draw = true;
  for (let i = 0; i < gameArray.length; i++) {
    if (gameArray[i] == undefined) {
      draw = false;
    }
  }
  return draw;
}

// Função para limpar o jogo
function clearGame() {
  gameArray = new Array(9);
  playerTurn = 1;
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("casa_selecionada");
    cells[i].classList.remove("x");
    cells[i].classList.remove("o");
  }
}

// Função para iniciar o jogo
function startGame() {
  
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("x");
    cells[i].classList.remove("o");
    cells[i].addEventListener("click", function () {
      console.log(playerTurn);
      this.classList.add("casa_selecionada");
      if (typeof gameArray[i] == "undefined") {
        if (playerTurn === 1) {
          this.classList.add("x");
        } else {
          this.classList.add("o");
        }
        fillArray(i);
        checkGameOver();
      }
    });
  }
}

// Onde o jogo começa
startGame();

// Resetar o jogo
button.addEventListener("click", function () {
  clearGame();
});
