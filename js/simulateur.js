let togg1 = document.getElementById("btnDevisSimu")
let togg2 = document.getElementById("btnDevisPerso");

let d1 = document.getElementById("overlay")
let d2 = document.getElementById("devisPerso") 

togg1.addEventListener("click", () => {
    if(getComputedStyle(d1).display != "block") {
        d1.style.display = "block";
        d2.style.display = "none";
    } 
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


// Button add 
let btnAdd = document.querySelector('#add')

btnAdd.addEventListener('click', () => {
    // code
});

// btnCancel.addEventListener('click', () => {
//     // code
// });



// Select append other option
// function random() {
//     let a = document.getElementById('options').value;
//     // || a === "maçonnerieMur" || a === "maçonnerieExterieur"
//     if(a === "constructionMaison" ) {
//         let array=["Testing", "Test"];
//     } 
//     else if(a === "peintureMur") {

//     }

//     let string = "";
//     for(i=0; i<array.length; i++) {
//         string = string + "<option>" + array[i] + "</option>";
//     }

//     document.getElementById('output').innerHTML = string;
// }




// function devisSim() {
//     // let d1 = document.getElementById("simulateur"); 
//     if(d1.style.display != "block") {
//         d1.style.display = "block";
//         d2.style.display = "none";
//     } 
// }

// function devisPerson() {
//     // let d2 = document.getElementById("devisPerso");
//     if(d2.style.display != "block") {
//         d2.style.display = "block";
//         d1.style.display = "none";
//     }
// }




// function toggle1() {
//     if(getComputedStyle(d2).display != "block") {
//         d2.style.display = "block";
//         d1.style.display = "none";
//         console.log("ok");
//     } else {
//         d2.style.display = "none";
//     }
// };

// togg2.onclick = toggle1;


