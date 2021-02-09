let togg1 = document.getElementById("btnDevisSimu")
let togg2 = document.getElementById("btnDevisPerso");

let d1 = document.getElementById("overlay")
let d2 = document.getElementById("devisPerso") 

// togg1.addEventListener("click", () => {
    
// })

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





// POUR FORMULAIRE 
// Etape 1
const step1 = document.getElementById('construct')
const step2 = document.getElementById('extension')
const step3 = document.getElementById('surelevation')
const step4 = document.getElementById('renovation')
const step5 = document.getElementById('r&e')

// Etape Une "projet"
function etapeUne(detail) {
    // Data-choice[a-e]
    let dataChoice = detail.getAttribute("data-choice")

    document.querySelector('.etape-2').style.display = "block";
    document.querySelector('#etape-1').style.display = "none";

    console.log(dataChoice)
    console.log(detail.innerHTML)
}

// Etape deux "type"
function etapeDeux(detail) {
    console.log(detail.innerHTML)

    document.querySelector('.etape-2').style.display = "none";
    document.querySelector('#etape-3').style.display = "block";
}

// Etape 3 "surface"
function etapeTrois() {

}














// document.getElementById("construction").addEventListener('click', function() {
//     document.querySelector('.testing').style.display = "block";
//     document.querySelector('#step-1').style.display = "none";
// })

// document.getElementById("maison").addEventListener('click', function() {
//     document.querySelector('.surface').style.display = "block";
// })







