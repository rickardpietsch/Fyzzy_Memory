const cards = ['A','B','C','D','E','F','G','H'];
const gameboard = document.querySelector('.gameboard');
const solutionArray = cards.concat(cards); //Concatenate array to multiply it
console.log(solutionArray);
shuffleArray(solutionArray);
console.log(solutionArray);

// console.log(cards);
startGame();
//Start game function
function startGame() {
  //Clear gameboard
  gameboard.innerHTML = "";
  //Create gameboard
  for (let i = 0; i <= ((solutionArray.length)-1); i++) {
    letters(i);
  }
}

function letters(i) {
  // console.log(i);
  gameboard.innerHTML += '<div class="card">'+i+'</div>';
}

//Shuffle array content
function shuffleArray(d) {
  for (let c = d.length - 1; c > 0; c--) {
    const b = Math.floor(Math.random() * (c + 1));
    const a = d[c];
    d[c] = d[b];
    d[b] = a;
  }
  return d
};
