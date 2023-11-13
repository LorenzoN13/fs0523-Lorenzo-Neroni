let key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlNGI1ZTJiY2QzYjAwMTk1MTc4Y2MiLCJpYXQiOjE2OTk2Mjk5MTgsImV4cCI6MTcwMDgzOTUxOH0.JTKS9eW1TXoEu6yUFxAySPd67H0tdOU-NDkPAIu6Hak';
let Url = 'https://striveschool-api.herokuapp.com/api/product';

let creaCard = document.querySelector('.crea');

creaCard.addEventListener('click',function(){
    
    let name = document.querySelector('#text').value;
    let description= document.querySelector('#text-area').value;
    let brand = document.querySelector('#brand').value;
    let imageUrl = document.querySelector('#image').value;
    let price = Number(document.querySelector('#prezzo').value);
   
    
    
    let newCard = {
        name,
        description,
        brand,
        imageUrl,
        price,
    }

    fetch(Url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${key}`
        },
        body:JSON.stringify(newCard)
    })
    .then(res => res.json())
    
})
