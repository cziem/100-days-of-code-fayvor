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
// start button
const startButton = document.querySelector('.start')
const scoreElement = document.querySelector('.score')
const displayNumber = document.querySelector('.number_display')
const feedback = document.querySelector('.feedback')




// Clear the page && Reset

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

