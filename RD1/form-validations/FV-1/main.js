// Next is to show the user the errors if any...

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
  const { user, errors } = formDetails;
  let isValid = true;
  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;

  // empty errors
  errors.fullnameEr = "";
  errors.usernameEr = "";
  errors.emailEr = "";
  errors.passwordEr = "";
  errors.rePasswordEr = "";
  errors.occupationEr = "";

  if (!user.fullname) {
    isValid = false;
    errors.fullnameEr = "fullname is empty";
  } else if (!user.fullname.match(/^[a-zA-Z_ ]+$/g)) {
    // name cannot start with a number nor contain a number at all
    isValid = false;
    errors.fullnameEr = "Name cannot contain numbers";
  }

  if (!user.username) {
    isValid = false;
    errors.usernameEr = "Username is empty";
  } else if (!user.username.match(/^[\w_]{4,8}$/g)) {
    // username must be within 4 - 8 characters
    isValid = false;
    errors.usernameEr = "Username must be within 4 - 8 characters";
  }

  if (!user.email) {
    isValid = false;
    errors.emailEr = "Email is empty";
  } else if (!user.email.match(emailRegex)) {
    isValid = false;
    errors.emailEr = "Invalid email format";
  }

  if (!user.password) {
    isValid = false;
    errors.passwordEr = "Password is empty";
  } else if (!user.password.match(/^[\w_]{5,}$/g)) {
    isValid = false;
    errors.passwordEr =
      "Password must not lower than 5 and cannot contain special characters";
  }

  if (!user.rePassword) {
    isValid = false;
    errors.rePasswordEr = "Confirm password is empty";
  } else if (user.rePassword !== user.password) {
    isValid = false;
    errors.rePasswordEr = "Password does not match";
  }

  if (!user.occupation) {
    isValid = false;
    errors.occupationEr = "Occupation is empty";
  } else if (!user.occupation.match(/^[a-zA-Z_ ]+$/g)) {
    isValid = false;
    errors.occupationEr = "Occupation cannot contain numbers";
  }

  handleSubmit(isValid);
};

// handleSubmit fn
const handleSubmit = isValid => {
  if (isValid) {
    console.log("Validated form is being sent...");

    // clear the fields
    resetForm();
  } else {
    console.log("Invalid form");
  }
};

const resetForm = () => {
  const form = [...document.querySelector("form")]; // Convert htmlCollection to an array

  form.forEach(el => {
    if (el.nodeName.toLowerCase() === "input") {
      el.value = "";
    }
  });
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
