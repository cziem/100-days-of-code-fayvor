export const validateLoginDetails = ({ email, password }) => {
  const validEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
  const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/;

  return validEmail.test(email) && validPassword.test(password)
    ? true
    : false;
};