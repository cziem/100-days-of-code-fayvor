let GAME = {
  score: 0,
  userNum: 0,
  isPlaying: false,
  generateNum() {
    return Math.floor(Math.random() * 100 + 1)
  },
  getUserNumber() {
    return this.userNum
  }
}

// Get DOM Elements
const startButton = document.querySelector('.start')

// Start Game
const startGame = () => {
  GAME.isPlaying = true // Not doing anything yet
  GAME.userNum = 0

  const number = GAME.generateNum()
  const userNumber = GAME.getUserNumber()
  console.log(number)

  if (userNumber === number) {
    console.log('correct')
  } else {
    console.log('Wrong')
  }
}


// Get user number
window.addEventListener('keypress', (e) => {
  if (e.key.match(/\d$/)) {
    return GAME.userNum += e.key
  }
})

// Event listners
startButton.addEventListener('click', startGame)

