const apiKey = 'qm7QfLr9hoUJzkQICa7USrV9ieVL3NnRj4nb3Mqo36OWw8MtP6Yv92ep';
const apiUrl = 'https://api.pexels.com/v1/search?query=pizza';

document.getElementById('loadButton').addEventListener('click', function() {
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json' 
    }
  })
    .then(res => res.json())
    .then(data => {
     
      const card = document.getElementById('imageCard');
      card.querySelector('.card-title').textContent = data.title;
      card.querySelector('.card-text').textContent = data.description;
     
    })
});