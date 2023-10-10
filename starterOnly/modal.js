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
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");

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

//default form operation + form validation function call

const form = document.querySelector("form[name='reserve']");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  validateForm();
});

// validation form

function validateForm() {
  // Récupérer les éléments de formulaire
  const firstName = document.getElementById("first");
  const firstNameErrorMessage = document.getElementById("first-name-error");
  const lastName = document.getElementById("last");
  const lastNameErrorMessage = document.getElementById("last-name-error");
  const checkBox = document.getElementById("checkbox1");
  const submitButton = document.querySelector(".btn-submit");
  const checkBox1ErrorMessage = document.getElementById("check-box-error");
  const contentModal = document.querySelector(".modal-body");
  const contentModalSuccess = document.querySelector(".modal-body-success");
  const exitButton = document.querySelectorAll(".button-success-return");

  //submit success
  submitButton.addEventListener("click", () => {
    contentModal.style.display = "none";
    contentModalSuccess.style.display = "flex";

  //exit submit success
    exitButton.forEach((btn) => btn.addEventListener("click", closeModal));
    
  });
}
