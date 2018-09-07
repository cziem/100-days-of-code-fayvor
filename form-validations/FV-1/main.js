const formDetails = {
  user: {
    fullname: '',
    username: '',
    email: '',
    password: '',
    rePassword: '',
    occupation: ''
  },
  errors: {
    fullnameEr: '',
    usernameEr: '',
    emailEr: '',
    passwordEr: '',
    rePasswordEr: '',
    occupationEr: ''
  }
}

const validator = () => {
  console.log('validator called')
}

const stateUpdator = (e) => {
  console.log(e)
}

const inputData = [...document.querySelectorAll('input')];

document.querySelector('form').addEventListener('input', (e) => {
  if (e.target.nodeName === 'INPUT') {
    let data = e.target.value
    stateUpdator(data)
  }
})

// inputData.forEach((input) => console.log(input))

document.querySelector('form').addEventListener('submit', validator)

document.querySelector('button').addEventListener('click', validator)
