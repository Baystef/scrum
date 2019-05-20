const apiUrl = 'https://stack-o-lite.herokuapp.com/api/v1/questions';
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const form = document.querySelector('form');

const postQuestion = (e) => {
  e.preventDefault();
  const body = {
    questionTitle: titleInput.value,
    questionDescription: descriptionInput.value,
  }
  // get token
  const token = window.localStorage.getItem('token');
  fetch(`${apiUrl}?token=${token}`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  .then(res => res.json())
  .then(response => {
    alert(response.status);
  })
  .catch(error => console.log(error))
}

form.addEventListener('submit', postQuestion);