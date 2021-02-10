// Click for Popup
document.getElementById("btnDevisSimu").addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = "none";
});



/************* Functions POUR LE FORMULAIRE *****************/ 

// Etape 1 "projet"
function etapeUne(detail) {
    // Data-choice[a-e]
    let dataChoice = detail.getAttribute("data-choice")

    document.querySelector('.etape-2').style.display = "block";
    document.querySelector('#etape-1').style.display = "none";

    // console.log(dataChoice)
    console.log(detail.innerHTML)
}

// Etape 2 "type"
function etapeDeux(detail) {
    console.log(detail.innerHTML)
    document.querySelector('.etape-2').style.display = "none";
    document.querySelector('#etape-3').style.display = "block";
}

// Etape 3 "surface"
function etapeTrois() {

    // Récupérer la valeur saisie de input
    let inputSurface = document.querySelector('.input-surface').value;
    
    if(inputSurface !== "" && inputSurface > 0) {
        console.log(inputSurface + " m²")
        document.querySelector('#etape-4').style.display = "block";
        document.querySelector('#etape-3').style.display = "none";
    } else {
        document.querySelector('#errorEmptyArea').style.display = "block";
    }
}

// Etape 4 "code postal"
function etapeQuatre() {

    let codePostal = document.querySelector('#code-postal').value;
    
    if(codePostal !== "") {
        console.log(codePostal + " code postal")
        document.querySelector('#etape-5').style.display = "block";
        document.querySelector('#etape-4').style.display = "none";
    } 
    else if(codePostal === "") {
        console.log("Null")
        document.querySelector('#etape-5').style.display = "block";
        document.querySelector('#etape-4').style.display = "none";
    }
}

// Etape 5 "budget"
function etapeCinq(test) {
    // code...
    console.log(test.innerHTML)
    document.querySelector('#etape-6').style.display = "block";
    document.querySelector('#etape-5').style.display = "none";
}


// Etape 6 "formulaire de contact validation"
const myForm = document.getElementById("myForm");

if(myForm) {
    myForm.addEventListener("submit", (e) => {
        // e.preventDefault();
        console.log("Formulaire a éte bien envoyé !");
    });
}








// document.getElementById("construction").addEventListener('click', function() {
//     document.querySelector('.testing').style.display = "block";
//     document.querySelector('#step-1').style.display = "none";
// })

// document.getElementById("maison").addEventListener('click', function() {
//     document.querySelector('.surface').style.display = "block";
// })







