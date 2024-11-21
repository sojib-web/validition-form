// @ts-nocheck
const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (validateName() && validateEmail()) {
    alert("Form Submitted Successfully");
  }
});

const validateName = () => {
  let name = document.getElementById("name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = "write full Name";
    return false;
  }
  nameError.innerHTML = "";
  nameError.previousElementSibling.classList.add("fa-check");
  nameError.previousElementSibling.classList.remove("fa-xmark");
  return true;
};

const validateEmail = () => {
  let email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Write a correct email";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  emailError.innerHTML = "";
  emailError.previousElementSibling.classList.add("fa-check");
  emailError.previousElementSibling.classList.remove("fa-xmark");
  return true;
};

const validatePassword = () => {
  let password = document.getElementById("password").value; // Get the password value
  let passwordError = document.getElementById("passwordError"); // Get the error message element

  if (password.length === 0) {
    passwordError.innerHTML = "Password is required";
    passwordError.previousElementSibling.classList.add("fa-xmark");

    return false;
  }

  // Regex pattern for a strong password
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!password.match(passwordPattern)) {
    passwordError.innerHTML =
      "Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character.";
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  passwordError.innerHTML = ""; // Clear the error message
  passwordError.previousElementSibling.classList.add("fa-check"); // Indicate success
  passwordError.previousElementSibling.classList.remove("fa-xmark"); // Remove the error indicator
  return true;
};
