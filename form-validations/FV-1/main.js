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
  console.log(e.target.value)
}



document.querySelector('form').addEventListener('submit', validator)
