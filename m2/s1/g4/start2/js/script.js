document.addEventListener("DOMContentLoaded", () => {
    let parole = document.querySelectorAll("i");
    function scompare(index) {
        for (let i = 0; i < parole.length; i++) {
           if (i === index) {
            parole[i].style.display = "block";
            } else {
                parole[i].style.display = "none";
            }
        }
    }
    scompare(0);
});

setTimeout(() => {
    scompare(0);
    document.querySelector("i.rotazione").classList.remove("rotazione");
    
    setTimeout(() => {
        scompare(0);
    },1000);

}, 1000);