
function numberRandom() {
    return Math.floor(Math.random() * 76) + 1;
};

let numberCell = 76;
let cartellone= Array.from({length: numberCell}, ( _, i) => i + 1);
let numeriEstratti =[];

document.getElementById('numberCasual').addEventListener('click', function(){
    const randomNumber = numberRandom();
    document.getElementById('numeroEstratto').textContent = `Numero estratto: ${randomNumber}`;
    
    let cellIndex = cartellone.indexOf(randomNumber);
    const celle = document.querySelectorAll('.cell');
    celle.forEach((cell, i) => {
        if (i === cellIndex) {
            cell.classList.add('coloredCell');
        }else{
            cell.classList.remove('coloredCell');
        }
    });
    numeriEstratti.push(randomNumber);

    numeriEstratti.forEach(num => {
    tombolaCard.children[num - 1].classList.add('coloredCell');
    })
});

let tombolaCard = document.getElementById('tombola');
cartellone.forEach(n => {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = n;
    tombolaCard.appendChild(cell);
});
