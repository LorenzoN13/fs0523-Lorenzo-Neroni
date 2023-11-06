class User{
    constructor(n,c,a,l){
        this.firstName = n;
        this.lastName = c;
        this.age = a;
        this.location = l;
    }
    confrontaEta(altroUtente){
        if (this.age > altroUtente.age){
            return `${this.firstName} è più vecchio di ${altroUtente.firstName}`;
        } else {
            return`${this.firstName} è più giovane di ${altroUtente.firstName}`;
        }
    }
}

let utente = new User('Lorenzo','Neroni',30,'Roma');
let utente1 = new User('Mario','Rossi',20,'Milano');

let confronta = utente.confrontaEta(utente1);
console.log(confronta);




class Pet{
    constructor(name,specie,owner,breed){
        this.name = name;        
        this.specie = specie;
        this.owner = owner;
        this.breed = breed;
    }

    stessoProprietario(otherPet){
        return this.owner === otherPet.owner;
    }

    personaProprietario() {
        return `${this.name} (${this.species} ${this.breed}) - Padrone: ${this.owner}`;
    }
}

const listaPet = [];

function creazionePet(){
    let name = document.getElementById('name').value;
    let specie = document.getElementById('specie').value;
    let breed = document.getElementById('breed').value;
    let owner = document.getElementById('owner').value;

    let pet = new Pet(name, specie, breed, owner);
    listaPet.push(pet);

    aggiornamentoList();
    svuotareForm();
}

function aggiornamentoList() {
    const listaPetEle = document.getElementById('listaPet');
    listaPetEle.innerHTML = '';
    
    for (let pet of listaPet) {
        let li = document.createElement('li');
        li.textContent = pet.personaProprietario();
        listaPetEle.append(li);
    }
}

function svuotareForm() {
    document.getElementById('name').value = '';
    document.getElementById('specie').value = '';
    document.getElementById('breed').value = '';
    document.getElementById('owner').value = '';
}