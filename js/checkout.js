// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var name = document.querySelector(".name");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");

// Exercise 6
function validate() {
  // Validate fields entered by the user: name, phone, password, and email
}

//All fields are required.
//All fields must be at least 3 characters long.
//The name and surname must contain only letters.
//The phone must contain only numbers.
//The password must include numbers and letters.
//https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/


//Email must be in email format
const isPasswordSecure = (password) => {
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  return re.test(password);
};

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
      showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
      showError(emailEl, 'Email is not valid.')
  } else {
      showSuccess(emailEl);
      valid = true;
  }
  return valid;
}