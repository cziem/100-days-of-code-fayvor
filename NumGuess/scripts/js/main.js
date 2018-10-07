let GAME = {
  score: 0,
  userNum: undefined,
  isPlaying: false,
  generatedNumber: null,
  generateNum() {
    return Math.floor(Math.random() * 10 + 1)
  },
  getUserNumber() {
    // Return a number not a string.
    return +this.userNum 
  }
}

// Get DOM Elements
const startButton = document.querySelector('.start')
const scoreBoxElement = document.querySelector('.score_box')
const scoreElement = document.querySelector('.score')
const displayNumber = document.querySelector('.number_display')
const feedback = document.querySelector('.feedback')

// Start Game
const startGame = () => {
  scoreBoxElement.style.display = 'flex'
  scoreElement.textContent = GAME.score

  GAME.userNum = ''
  return GAME.generatedNumber = GAME.generateNum()
}

// Show User number
const showNumber = number => {
  displayNumber.textContent = number
  displayNumber.classList.add('animate_number')

  // Reset the zoom effect for every keypress
  setTimeout(() => {
    displayNumber.classList.remove('animate_number')  
  }, 500);
}

// Get user number
window.addEventListener('keypress', (e) => {
  if (e.key.match(/\d$/)) {
    GAME.userNum = e.key
    showNumber(e.key)
  }
})

// Game Logic 
window.addEventListener('keyup', () => {
  const userNumber = GAME.getUserNumber()
  const number = GAME.generatedNumber

  if (number !== userNumber) {
    console.log('failed')
  } else {
    GAME.score += 10
    scoreElement.textContent = GAME.score
  }

  console.log('GenNum:' + number, 'UserNum:' + userNumber)
})

// Event listners
startButton.addEventListener('click', startGame)