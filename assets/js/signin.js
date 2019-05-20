const apiUrl = 'https://stack-o-lite.herokuapp.com/api/v1/auth/login';
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const button = document.querySelector('.signin-button');

button.addEventListener('click', e => {
  e.preventDefault();
  const post = {
    email: email.value,
    password: password.value,
  };
  const params = {
    method: 'POST',
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(post)
  };
  fetch(apiUrl, params)
    .then(res => res.json())
    .then(data => {
      if (data.status === 'fail') {
        console.log(email.value);
        alert('Wrong Credentials');
      } else  {
        alert(`User with email ${email.value} is signed in`)
      }
  })
  .catch(error => console.log(error.message));
});



