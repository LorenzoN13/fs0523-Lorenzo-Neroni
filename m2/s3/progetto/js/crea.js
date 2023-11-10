let key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjY1Nzk0YjFkODAwMThkNTYzMzYiLCJpYXQiOjE2OTk2MDgxNTEsImV4cCI6MTcwMDgxNzc1MX0.ndzccC_edi4UbVmR5JQNQ3kQJ3av-XBCMwUYhUflObM';
let Url = 'https://striveschool-api.herokuapp.com/';

let creaCard = document.querySelector('.crea');

creaCard.addEventListener('click',function(){
    
    let text = document.querySelector('#text').value;
    let prezzo = Number(document.querySelector('#prezzo').value);
    let textArea = document.querySelector('#text-area').value;
    let checkBox = Boolean(document.querySelector('#checkbox').value);
    
    
    let newCard = {
        text,
        prezzo,
        textArea,
        checkBox
    }

    fetch(Url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${key}`
        },
        body:JSON.stringify(newCard)
    })
    .then(res => res.json())
    

})
