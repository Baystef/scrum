const apiUrl = 'https://stack-o-lite.herokuapp.com/api/v1/auth/signup';
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const form = document.querySelector('form');

const passwordCheck = () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (password === confirmPassword) {
    return true;
  }
  alert('Passwords do not match');
  return false;
}
const signup = (e) => {
  e.preventDefault();
  if (!passwordCheck()) {
    return;
  }
  const body = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    confirmPassword: confirmPasswordInput.value,
  }
  fetch(apiUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  .then(res => res.json())
  .then(response => {
    if (response.status !== 'success') {
      alert(response.message);
      return;
    }
    window.localStorage.setItem('token', response.data.token);
    alert(response.message);
    window.location.href = 'create-question.html';
  })
  .catch(error => console.log(error))
}

form.addEventListener('submit', signup);
