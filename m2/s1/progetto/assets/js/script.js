let navbar = document.querySelector(".navbar")
let btn = document.querySelector(".btn");
let emme = document.querySelectorAll('g[stroke-linecap="butt"]');


window.addEventListener('scroll', () => {
    if (window.scrollY < 460) {
        navbar.style.backgroundColor = "#ffc017";
        btn.style.backgroundColor = "#000";
    } else {
        navbar.style.backgroundColor = "#ffff";
        btn.style.backgroundColor = "#1A8917";
    }
});




function udini(){
    let mRandom = emme[Math.floor(Math.random() * emme.length)];
    
    if (mRandom.style.opacity == 0) { 
        
        mRandom.style.opacity = "1";
        
    } else {
        mRandom.style.opacity = "0";
    }
}

setInterval(() => udini(),47);