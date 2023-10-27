let emme = document.getElementById(m);
let randomOpacity = Math.random();
let elementiM = document.querySelector(".elementi-m");
let navbar = document.querySelector(".navbar")
let btn = document.querySelector(".btn");

window.addEventListener('scroll', () => {
    if (window.scrollY < 460) {
        navbar.style.backgroundColor = "#ffc017";
        btn.style.backgroundColor = "#000";
    } else {
        navbar.style.backgroundColor = "#ffff";
        btn.style.backgroundColor = "#1A8917";
    }
});



function randomM(elemento){
    emme.style.opacity = randomOpacity;
}

setInterval(randomM, 2000); 