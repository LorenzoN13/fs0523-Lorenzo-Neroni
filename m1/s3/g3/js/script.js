let bottone = document.getElementById('bottone');

bottone.addEventListener("click", function(){

    let targa = document.getElementById('targa');
    let completato = document.getElementById('completato');
    let text = document.getElementById('text');

    if(!text.value) return;

        let li = document.createElement('li');
        li.classList.add('elenco');
        li.innerText = text.value;
        li.addEventListener('click', function(){
        completato.append(li);
    })
    
    let bottone = document.createElement("button");
        bottone.textContent = "X";
        bottone.addEventListener("click", function () {
            li.style.display = 'none';
            bottone.remove();
        });

    li.append(bottone);
    targa.append(li);
    text.value = '';
});

