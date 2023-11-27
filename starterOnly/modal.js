function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelectorAll(".close, .close-button");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const errorFields = document.querySelectorAll(".error-message");
  errorFields.forEach((field) => (field.textContent = ""));

  validateForm();
});

// Validation form
function validateForm() {
  const formData = document.querySelectorAll(".formData");

  const formDataValues = {};

  let isFieldValid = true;

  formData.forEach((element) => {
    const input = element.querySelector("input, select");
    const name = input.name;
    const value = input.value;
    formDataValues[name] = value;
  });

  if (formDataValues.first.trim().length < 2) {
    isFieldValid = false;
    displayErrorMessage(
      "first",
      "Le prénom doit contenir au moins 2 caractères."
    );
  }

  if (formDataValues.last.trim().length < 2) {
    isFieldValid = false;
    displayErrorMessage(
      "last",
      "Le nom de famille doit contenir au moins 2 caractères."
    );
  }

  if (!isEmail(formDataValues.email)) {
    isFieldValid = false;
    displayErrorMessage("email", "Veuillez entrer une adresse email valide.");
  }

  if (formDataValues.birthdate.length < 1) {
    isFieldValid = false;
    displayErrorMessage("birthdate", "Veuillez entrer une date de naissance.");
  }

  if (isNaN(formDataValues.quantity) || formDataValues.quantity.length < 1) {
    isFieldValid = false;
    displayErrorMessage(
      "quantity",
      "Veuillez entrer une valeur numérique pour le nombre de concours."
    );
  }

  const locationInputs = document.getElementsByName("location");
  const locationChecked = Array.from(locationInputs).some(
    (input) => input.checked
  );
  if (!locationChecked) {
    isFieldValid = false;
    displayErrorMessage("location", "Veuillez sélectionner un lieu.");
  }

  const checkbox1Checked = document.getElementById("checkbox1");

  if (!checkbox1Checked.checked) {
    isFieldValid = false;
    displayErrorMessage(
      "checkbox1",
      "Vous devez accepter les conditions générales."
    );
  }

  if (isFieldValid) {
    return displaySuccessMessage();
  }
}

//regex email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Error Message
function displayErrorMessage(fieldName, errorMessage) {
  const errorField = document.getElementById(`${fieldName}-error`);

  errorField.textContent = errorMessage;
}

function displaySuccessMessage() {
  //submit success
  const contentModal = document.querySelector(".modal-body");
  const contentModalSuccess = document.querySelector(".modal-body-success");

  contentModal.style.display = "none";
  contentModalSuccess.style.display = "flex";


  //reset form
  document.getElementById("form").reset();

  //close success form
  const resetButton =
    document.getElementById("reset");
  resetButton.addEventListener("click", function () {
    contentModal.style.display = "flex";
    contentModalSuccess.style.display = "none";
  });
}
