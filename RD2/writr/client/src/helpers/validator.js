export const validateLoginDetails = ({ email, password }) => {
  const validEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
  // const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/;

  return validEmail.test(email) && password.length > 4
    ? true
    : false;
};

export const validateSignupDetails = ({ name, username, email, password, roles }) => {
  const validName = /^([\w]{3,})|[\w]{3,}/g
  const validUsername = /^[\w]{3,12}/g
  const validEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
  const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/;
  const validRoles = ['editor', 'writer', 'others']

  return validName.test(name) &&
    validUsername.test(username) &&
    validEmail.test(email) &&
    validPassword.test(password) &&
    validRoles.indexOf(roles) > 0 ?
    true :
    false;
}