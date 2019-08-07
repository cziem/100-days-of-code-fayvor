let GAME = {
  score: 0,
  trial: 3,
  userNum: undefined,
  isPlaying: true,
  generatedNumber: null,
  generateNum() {
    return Math.floor(Math.random() * 10)
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

  if (GAME.trial > 0 && GAME.isPlaying) {
    if (number !== userNumber) {
      GAME.trial--;
      
      setTimeout(() => {
        feedback.classList.add('animate_feedback')
        feedback.textContent = `${userNumber} is wrong! Trail: ${GAME.trial}`
      }, 500);
    } else {
      GAME.score += 10
      scoreElement.textContent = GAME.score
      
      setTimeout(() => {
        feedback.classList.add('animate_feedback')
        feedback.textContent = "Smart Chap. \u{1F6C4} ";
      }, 400);
    }
  } else {
    feedback.classList.add('animate_feedback')
    feedback.textContent = 'Game over! The number was ' + number
    GAME.isPlaying = false
  }
  
  // console.log('GenNum:' + number, 'UserNum:' + userNumber)
})

// Event listners
startButton.addEventListener('click', startGame)