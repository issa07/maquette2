let togg1 = document.getElementById("btnDevisSimu")
let togg2 = document.getElementById("btnDevisPerso");

let d1 = document.getElementById("overlay")
let d2 = document.getElementById("devisPerso") 

togg1.addEventListener("click", () => {
    
})

// togg2.addEventListener("click", () => {
//     if(getComputedStyle(d2).display != "block") {
//         d2.style.display = "block";
//         d1.style.display = "none";

//     }
// })


// Click for Popup
document.getElementById("btnDevisSimu").addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = "none";
});

