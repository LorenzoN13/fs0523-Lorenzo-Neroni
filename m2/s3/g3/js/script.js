fetch('https://striveschool-api.herokuapp.com/books')
.then(res => res.json())
.then(res => {
    res.forEach(book => {

        let collone = document.createElement('div');
            collone.className = 'col-md-3 mb-3';

        let card = document.createElement('div');
            card.className = 'card';
            card.style.height = '43em';

        let immagine = document.createElement('img');
            immagine.className = 'card-img-top';
            immagine.style.height = '30em';
            immagine.src = book.img;
            immagine.alt = book.title;
            card.appendChild(immagine);

        let cardCorpo = document.createElement('div');
        cardCorpo.className = 'card-body';

        let title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = book.title;

        let prezzo = document.createElement('p');
        prezzo.className = 'card-text';
        prezzo.textContent = `Prezzo: $${book.price}`;

        let containerButton = document.createElement('div');
        
        let buttonCompraOra = document.createElement('button');
        buttonCompraOra.innerHTML = "Compra Ora";
        buttonCompraOra.style.marginRight = "10px";
        buttonCompraOra.style.padding = "6px 8px";
        buttonCompraOra.style.border = "none";
        buttonCompraOra.style.borderRadius = "7px";
        buttonCompraOra.style.color = "white";
        buttonCompraOra.classList.add('bg-primary');
        
        let buttonRimuovi = document.createElement('button');
        buttonRimuovi.innerHTML = "Scarta";
        buttonRimuovi.style.padding = "6px 8px";
        buttonRimuovi.style.borderRadius = "7px";
        buttonRimuovi.style.border = "none";
        buttonRimuovi.classList.add('bg-danger');
        buttonRimuovi.style.color = "white";
        
        cardCorpo.appendChild(title);
        cardCorpo.appendChild(prezzo);
        
        containerButton.appendChild(buttonCompraOra);
        containerButton.appendChild(buttonRimuovi);

        cardCorpo.appendChild(buttonCompraOra);
        cardCorpo.appendChild(buttonRimuovi);

        containerButton.appendChild(cardCorpo);
        card.appendChild(cardCorpo);

        collone.appendChild(card);

        document.querySelector('.row').appendChild(collone);
    });
})
                   
