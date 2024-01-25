// let name = prompt("what is your name?"); 
//  alert("Hello " + name);
// if (name.length > 7) {
// alert("Wow, you have a REALLY long name!");
// }else{
//     alert("Your name isn't very long!");
// }

// let lemonchicken = confirm("Chef, do you have lemon chicken?");
// let beefWithBlackBean = confirm("Chef, do you have beff with blackbean?");
// let sweetAndSourPork = confirm("Chef, do you have sweet sour pork?");

// if (lemonchicken) {
//     alert("Great! I'm having lemon chicken!");
// }else if (beefWithBlackBean){
//     alert(" I'm having beef!");
// }else if (sweetAndSourPork){
//     alert("I'll have pork!");
// }else{
//     alert("I'll having rice then");
// }

// let name =prompt("what is your name?").toLowerCase();
// let Dad = 'Noel';
// let mum = 'Chouchou'
// let myName = 'Debby'

// if (name === Dad){
//     alert("Hi Dad!");
// }else if (name ===mum) {
//     alert("Hi mum! ");
// }else {
//     alert("Hi me!");
// }

// let sheepCounter = 0
// while (sheepCounter < 10) {
//     console.log("I have counted " + sheepCounter + "sheep! ");
//     sheepCounter++;


// }console.log("Zzzzzzzzzz");

// for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
//     console.log("I have counted " + sheepCounted + " sheep!");
//     }
//     console.log("Zzzzzzzzzzz");

// let timesToSayHello = 3;
// for (var i = 0; i < timesToSayHello; i++) 
// {
// console.log("Hello!");
// }

// let animals = ["lion", "Flamingo", "Polar Bear", "Boa construction"]

// for (let i=0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// let name = prompt("what is my name");

// for (let i = 0; i < name.length; i++)
//  {
// console.log("My name contains the letter " + name[i] + ".");
// }

// "******POWER BY 2 *****"
// for (let x = 2; x < 10000; x = x * 2) {
//     console.log(x);
//     }

//     "*****POWER BY 3*****"
//     for (let x = 3; x < 10000; x = x * 3) {
//         console.log(x);
//         }  

"******** challenge*******"

// let animals =["Cat", "Fish", "Lemur", "Komodo Dragon"]
// for (let i=0; i<animals.length; i++) {
//    animals [i] ="awesome " + animals[i]}
//     console.log(animals );

"*****challenge 2 *******"

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomString = "";

for (let i = 0; i < 6; i++) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randomString);

"*****challenge 3*****"

let input = "javascript is awesome";
let output = "";

for (let i= 0; i < input.length; i++){
    if (input[i] === "a ") {
        output += "4";
    } else if (input[i] === "e ") {
    } else if (input[i] === "i "){
        output += "1 ";
    } else if (input [i] === "o "){
       output += "o " ;
    } else {
        output += input[i];
    }
}
alert(output);



    






