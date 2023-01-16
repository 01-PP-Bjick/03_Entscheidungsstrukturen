"use strict";

// Entscheidungsstrukturen | control flow

// // Deklaration + Assigment
// const ageJohn = 35;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark); // = * 1 ist Zuweiser == * 2 Test auf Gleichheit

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos

// if (true && true) 
// if (isJohnOlder)
// if (ageJohn > ageMark) 
// {
//     console.log("John ist älter.");
// }

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if (true)
// if (false)
// if (isJohnOlder)
// if (ageJohn > ageMark)
// {
//     console.log("John ist älter.");    
// } 
//     else 
//     {
//         console.log("John ist jünger.");
//     }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/****** Fallunterscheidung / SWITCH|CASE 1 ******/
 
const firstName = "Jane";
let job;
 
job = "driver";     // .. fährt TAXI! / UBER
job = "diver";      // .. taucht im Rhein! 
job = "artist";     // .. malt ein Bild!
job = "pilot";      // .. macht etwas anderes! --> default
job = "teacher";    // .. unterrichtet!
// job = "instructor";  // .. unterrichtet!

switch (job) 
{
    case "driver":
        console.log("Jane fährt Taxi / Uber")
        break;
    case "diver":
        console.log("Jane taucht im Rhein!")
        break;
    case "artist":
    console.log("Jane malt ein Bild!")
        break;
    case "teacher":
    case "instructor":
    console.log("Jane unterrichtet")
        break;   

    default:
        console.log("Jane macht etwas anderes!")
        break;
}