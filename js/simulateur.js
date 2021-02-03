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


