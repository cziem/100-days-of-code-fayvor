// Just a little bit of scripting... #scriptKiddies

const kidEl = document.querySelector('#setName');
const inputEl = document.querySelector('#name')

// setup setName
const setName = e => {
  const name = e.target.value

  if (e.key === 'Enter') {
    kidEl.innerHTML = name
    inputEl.value = ''
  } else {
    kidEl.innerHTML = 'Hello'
  }

}

// Listen for user input
document.querySelector('#name').addEventListener('keypress', setName)