let key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlNGI1ZTJiY2QzYjAwMTk1MTc4Y2MiLCJpYXQiOjE2OTk2Mjk5MTgsImV4cCI6MTcwMDgzOTUxOH0.JTKS9eW1TXoEu6yUFxAySPd67H0tdOU-NDkPAIu6Hak';
let Url = 'https://striveschool-api.herokuapp.com/api/product/';

    fetch(Url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${key}`
        },
        body:JSON.stringify(newCard)
    })
    .then(res => res.json())
    