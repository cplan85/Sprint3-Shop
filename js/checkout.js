// Get the input fields
var password = document.querySelector(".password");
//var phoneInput = document.querySelector(".phone");
var firstNameInput = document.querySelector("#fName");
var lastNameInput = document.querySelector("#fLastN");
var emailInput = document.querySelector("#fEmail");
var phoneInput = document.querySelector("#fPhone");
var passwordInput = document.querySelector("#fPassword");
var addressInput = document.querySelector("#fAddress");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");

var forms = document.querySelectorAll(".needs-validation");

const form = document.querySelector(".needs-validation");

// Exercise
function validate(event) {
    // prevent the form from submitting
    event.preventDefault();

    // validate fields
    let isFirstnameValid = checkName(
      firstNameInput.value.trim(),
      firstNameInput
    ),
    isLastnameValid = checkName(
      lastNameInput.value.trim(), 
      lastNameInput),
    isEmailValid = checkEmail(),
    isPhoneValid = checkPhone(),
    isPasswordValid = checkPassword(),
    isAddressValid = checkAddress();

    let isFormValid = isFirstnameValid && isLastnameValid && isEmailValid && isPhoneValid && isPasswordValid && isAddressValid;

    // submit to the server if the form is valid
    if (isFormValid) {
      console.log("everything is correct!");
    }
 
}

  form.addEventListener("submit", (e) => {
    // prevent the form from submitting
    validate(e);
  });

  form.addEventListener('blur', (e) => {
  
    validate(e);
    //registerValidate();
  }, true);


//All fields are required. - ✓ in Bootstrap
//All fields must be at least 3 characters long. ✓
//The name and surname must contain only letters. ✓
//The phone must contain only numbers. ✓
//The password must include numbers and letters. ✓
//https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/


//Email must be in email format

const isRequired = (value) => (value === "" ? false : true);

const atLeastThree = (length, min) => (length < min ? false : true);

const checkName = (nameVal, nameInput) => {
  let valid = false;

  const min = 3;

  if (!isRequired(nameVal)) {
    showError(nameInput, "Name cannot be blank.");
  } else if (!atLeastThree(nameVal.length, min)) {
    showError(nameInput, `Name must be at least ${min} characters.`);
  } else if (!isInputLetters(nameVal)) {
    showError(nameInput, `Names must be made of letters`);
  } else {
    showSuccess(nameInput);
    valid = true;
  }
  return valid;
};

//
const checkEmail = () => {
  let valid = false;
  const email = emailInput.value.trim();
  if (!isRequired(email)) {
    showError(emailInput, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailInput, "Email is not valid.");
  } else {
    showSuccess(emailInput);
    valid = true;
  }
  return valid;
};

const checkPhone = () => {
  let valid = false;
  const phone = phoneInput.value.trim();
  if (!isRequired(phone)) {
    showError(phoneInput, "Phone cannot be blank.");
  } else if (!isPhoneValid(phone)) {
    showError(phoneInput, "Phone number must contain numbers.");
  } else if (!isPhone9Digits(phone)) {
    showError(phoneInput, "Phone number must have 9 digits.");
  }else {
    showSuccess(phoneInput);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;
  const password = passwordInput.value.trim();
  if (!isRequired(password)) {
    showError(passwordInput, "Password cannot be blank.");
  } else if (!isPasswordValid(password)) {
    showError(passwordInput, "Password must contain letters and numbers.");
  } else if (!atLeastThree(password.length, 3)) {
    showError(passwordInput, "Password must be at least 3 characters long.");
  }else {
    showSuccess(passwordInput);
    valid = true;
  }
  return valid;
};

const checkAddress = () => {
  let valid = false;
  const address = addressInput.value.trim();
  console.log("address",address.length);
  if (!isRequired(address)) {
    showError(addressInput, "Address cannot be blank.");
  } else if (!atLeastThree(address.length, 3)) {
    showError(addressInput, "Address must be at least 3 characters long.");
  }else {
    showSuccess(addressInput);
    valid = true;
  }
  return valid;
};


const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");
  input.classList.add("is-valid");
  input.classList.remove("is-invalid");
  

  // hide the error message
  const error = formField.querySelector(".error-message");
  error.textContent = "";
  //const success = document.querySelector(".correct");
 // success.textContent = "success";
};

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");
  input.classList.add("is-invalid");

  // show the error message
  const error = formField.querySelector(".error-message");
  error.textContent = message;
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isInputLetters = (input) => {
  return !/[^a-zA-Z]/.test(input);
};

const isPhoneValid = (phoneNumber) => {
  const re =
  /^\d+$/;
  return re.test(phoneNumber);
};

const isPhone9Digits = (phoneNumber) => {
  const is9digits = /(?=.{9,})/
  return is9digits.test(phoneNumber);
};

const isPasswordValid = (password) => {
  const re =
  /\S*(\S*([a-zA-Z]\S*[0-9])|([0-9]\S*[a-zA-Z]))\S*/;

  return re.test(password);

};





