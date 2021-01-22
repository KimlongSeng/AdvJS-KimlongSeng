const X = 'x'
const O = 'circle'
const Won = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const BackButton = document.getElementById('BackButton')
const WinMessage = document.querySelector('[Wintext]')
let Oturn

startGame()

restartButton.addEventListener('click', startGame)
BackButton.addEventListener('click', () => {window.location.href = "../Main.html"});

function startGame() {
  Oturn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X)
    cell.classList.remove(O)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

function handleClick(e) {
  const cell = e.target
  const currentClass = Oturn ? O : X
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw) {
  if (draw) {
    WinMessage.innerText = 'Draw!'
  } else {
    WinMessage.innerText = `${Oturn ? "O's" : "X's"} Wins!`
  }
  winningMessageElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X) || cell.classList.contains(O)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  Oturn = !Oturn
}

function setBoardHoverClass() {
  board.classList.remove(X)
  board.classList.remove(O)
  if (Oturn) {
    board.classList.add(O)
  } else {
    board.classList.add(X)
  }
}

function checkWin(currentClass) {
  return Won.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}