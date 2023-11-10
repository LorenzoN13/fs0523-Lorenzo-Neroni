async function getImage(query) {
  const Url = 'https://api.pexels.com/v1/search?query=';
  const apiKey = 'qm7QfLr9hoUJzkQICa7USrV9ieVL3NnRj4nb3Mqo36OWw8MtP6Yv92ep';
  return fetch(Url + query, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: apiKey
    }
  }).then(res => res.json())
}

let getImages1 = document.querySelector('#load-image');
let getImages2 = document.querySelector('#load-secondary');
 
getImages1.addEventListener('click', async () => {
  let immagini = await getImage('montains')
  replaceImgs(immagini.photos);
})

getImages2.addEventListener('click',() => {
  getImage('pizza').then(res => replaceImgs(res.photos))
})


function replaceImgs(imagesArr) {
  let cardImages = document.querySelectorAll('.card img')

  cardImages.forEach((img.i) => {
    img.src = imagesArr[i].src.tiny
  })
}