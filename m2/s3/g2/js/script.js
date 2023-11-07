document.getElementById('salva').addEventListener('click', function() {
    let nomeInEntrata = document.getElementById('name');
    let name = nomeInEntrata.value;
    localStorage.setItem('registrazioneNome', name);
    document.getElementById('nome-salvato').textContent = name;
});

let nomeSalvato = localStorage.getItem('registrazioneNome');
if (nomeSalvato) {
    document.getElementById('salva').textContent = nomeSalvato;
    document.getElementById('name').value = nomeSalvato;
};

document.getElementById('rimuovi').addEventListener('click', function() {
    localStorage.removeItem('registrazioneNome');
    document.getElementById('name').value = '';
});
