const formDetails = {
  user: {
    fullname: "",
    username: "",
    email: "",
    password: "",
    rePassword: "",
    occupation: ""
  },
  errors: {
    fullnameEr: "",
    usernameEr: "",
    emailEr: "",
    passwordEr: "",
    rePasswordEr: "",
    occupationEr: ""
  },
  isValid: true
};

const stateUpdator = (data, element) => {
  const { user } = formDetails;

  // identify which form element is sending in the data
  user[element] = data;

  return user;
};

const validator = () => {
  const { user } = formDetails;
  let isValid = true;
  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;

  if (!user.fullname) {
    isValid = false;
    console.log("fullname is empty");
  } else if (!user.fullname.match(/^[a-zA-Z_ ]+$/g)) {
    // name cannot start with a number nor contain a number at all
    isValid = false;
    console.log("Name cannot contain numbers");
  }

  if (!user.username) {
    isValid = false;
    console.log("Username is empty");
  } else if (!user.username.match(/^[\w_]{4,8}$/g)) {
    // username must be within 4 - 8 characters
    isValid = false;
    console.log("Username must be within 4 - 8 characters");
  }

  if (!user.email) {
    isValid = false;
    console.log("Email is empty");
  } else if (!user.email.match(emailRegex)) {
    isValid = false;
    console.log("Invalid email format");
  }

  if (!user.password) {
    isValid = false;
    console.log("Password is empty");
  } else if (!user.password.match(/^[\w_]{5,}$/g)) {
    isValid = false;
    console.log(
      "Password must not lower than 5 and cannot contain special characters"
    );
  }

  if (!user.rePassword) {
    isValid = false;
    console.log("Confirm password is empty");
  } else if (!(user.rePassword === user.password)) {
    isValid = false;
    console.log("Password does not match");
  }

  if (!user.occupation) {
    isValid = false
    console.log('Occupation is empty')
  } else if (!user.occupation.match(/^[a-zA-Z_ ]+$/g)) {
    isValid = false
    console.log('Occupation cannot contain numbers')
  }

  // return isValid
};

// Get data from form elements
document.querySelector("form").addEventListener("input", e => {
  if (e.target.nodeName === "INPUT") {
    let data = e.target.value;
    const element = e.target.name;

    stateUpdator(data, element);
  }
});

document.getElementById("regForm").addEventListener("submit", e => {
  e.preventDefault();
  validator();
});
