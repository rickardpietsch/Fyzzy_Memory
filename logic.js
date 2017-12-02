const cards = ['A','B','C','D','E','F','G','H'];
const gameboard = document.querySelector('.gameboard');
console.log(cards);

startGame();
//Start game function
function startGame() {
  //Clear gameboard
  gameboard.innerHTML = "";
  //Create gameboard
  for (var i = 0; i <= ((cards.length*2)-1); i++) {
    letters(i);
  }
}

function letters(i) {
  console.log(i);
  gameboard.innerHTML += '<div class="card">'+i+'</div>';
}
