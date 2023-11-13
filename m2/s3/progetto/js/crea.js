let key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlNGI1ZTJiY2QzYjAwMTk1MTc4Y2MiLCJpYXQiOjE2OTk2Mjk5MTgsImV4cCI6MTcwMDgzOTUxOH0.JTKS9eW1TXoEu6yUFxAySPd67H0tdOU-NDkPAIu6Hak';
let Url = 'https://striveschool-api.herokuapp.com/api/product';

let creaCard = document.querySelector('.crea');

creaCard.addEventListener('click',function(){
    
    let name = document.querySelector('#text').value;
    let price = Number(document.querySelector('#prezzo').value);
    let description= document.querySelector('#text-area').value;
    let brand = document.querySelector('#brand').value;
    let image = document.querySelector('#image').value;
    let checkBox = document.querySelector('#checkbox').value;
    
    
    let newCard = {
        name,
        brand,
        image,
        description,
        price,
        checkBox
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
