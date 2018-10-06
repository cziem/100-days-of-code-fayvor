let GAME = {
  score: 0,
  userNum: undefined,
  isPlaying: false,
  generatedNumber: null,
  generateNum() {
    return Math.floor(Math.random() * 10 + 1)
  },
  getUserNumber() {
    return this.userNum
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

// Get user number
window.addEventListener('keypress', (e) => {
  if (e.key.match(/\d$/)) {
    return GAME.userNum = e.key
  }
})

// Game Logic 
window.addEventListener('keyup', () => {
  const userNumber = GAME.getUserNumber()
  const number = GAME.generatedNumber

  if (number !== userNumber) {
    console.log('failed')
  } else {
    score += 10
    scoreElement.textContent = GAME.score
  }

  console.log('GenNum:'+ number, 'UserNum:' + userNumber)
})

// Event listners
startButton.addEventListener('click', startGame)