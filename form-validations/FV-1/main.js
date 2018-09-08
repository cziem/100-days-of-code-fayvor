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
  console.log(formDetails.user)
}

const stateUpdator = (data, element) => {
  const { user } = formDetails

  // identify which form element is sending in the data
  user[element] = data

  return user
}

// Get data from form elements
document.querySelector('form').addEventListener('input', (e) => {
  if (e.target.nodeName === 'INPUT') {
    let data = e.target.value
    const element = e.target.name

    stateUpdator(data, element)
  }
})

document.querySelector('form').addEventListener('submit', () => {
  validator
})
