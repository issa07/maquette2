let togg2 = document.getElementById("togg2");
let d2 = document.getElementById("devisPerso");


function togg() {
    if(getComputedStyle(d2).display != "none") {
        d2.style.display = "none";
    } else {
        d2.style.display = "block";
    }
};

togg2.onclick = togg;