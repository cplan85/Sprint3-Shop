// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var firstNameInput = document.querySelector("#fName");
var lastNameInput = document.querySelector("#fLastN");
var emailInput = document.querySelector("#fEmail");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");

var forms = document.querySelectorAll(".needs-validation");

const form = document.querySelector(".needs-validation");

// Exercise
function validate() {
  form.addEventListener("submit", function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isFirstnameValid = checkName(
      firstNameInput.value.trim(),
      firstNameInput
    );

    let isLastnameValid = checkName(lastNameInput.value.trim(), lastNameInput);

    let isFormValid = isFirstnameValid && isLastnameValid;

    // submit to the server if the form is valid
    if (isFormValid) {
      console.log("name correct!");
    }
  });
  /*
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
  */
}

//All fields are required. - X in Bootstrap
//All fields must be at least 3 characters long.
//The name and surname must contain only letters.
//The phone must contain only numbers.
//The password must include numbers and letters.
//https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/
//https://designmodo.com/validate-forms-bootstrap/

//Email must be in email format

const isRequired = (value) => (value === "" ? false : true);

const atLeastThree = (length, min) => (length < min ? false : true);

const checkName = (nameVal, nameInput) => {
  let valid = false;

  const min = 3,
    max = 25;

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
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const isInputLetters = (input) => {
  return !/[^a-zA-Z]/.test(input);
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
