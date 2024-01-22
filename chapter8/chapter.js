// let ourFirstFunction = function() {
//     console.log("Hello World!");
// }


// ourFirstFunction();


// function ourFirstFunction() {
//     console.log("Hello Word!");
// }

// sayHelloTo(" Debby");

// function sayHelloTo (name) {
//     console.log("Hello" + name);

// }

// drawcats(15);

// function drawcats(howManyTimes){
//     for (let i = 0; i < howManyTimes;i++) {
//         console.log(i+ " =^.^=");
//     }
// }

// function printMultiplesTimes(howManyTimes,whatToDraw) {
//     for (let i = 0; i < howManyTimes;i++) {
// console.log(i + " " + whatToDraw);
//     }
// }
// printMultiplesTimes(10,"<0#0>");

// function double (number){
// return number *2;
// }
// console.log(double(3));

// console.log(double(2) + double(5));

// console.log(double(double(3)));

// function pickRandomWord (words) {
//     let rWord = words[Math.floor(Math.random()* words.length)];
//     return rWord ; 
// }

// function generateRandomInsult() {
// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// // Join all the random strings into a sentence:
// let randomString = "Your " + pickRandomWord(randomBodyParts) + 
// " is like a " + pickRandomWord(randomAdjectives) + 
// " " + pickRandomWord(randomWords) + "!!!";
// console.log(randomString);

// }

// generateRandomInsult();

// function fifthLetter(name) {
//     if (name.length < 5){
//         return 
//     }
//     return "The fifth letter of your name is " + name[4];
// }
// let name = prompt("What is your name?");
// console.log(fifthLetter("name"));


// function mediaForScore(Score){
//     if (score <3) {
//         return "Bronze";
//     }
//     if (score <7) {
//         return "Silver";
//     }
//     return "Gold";

// }
// let score = prompt("what is your score?");
// alert(mediaForScore(score));

"***** Challenges*****"

function add(num1, num2) {
    return num1 = num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(add(multiply(36325,9824), 777));

"***challenge2***"

function areArraySame(array1, array2) {
    if (array1.length !== array2.length) {
        return false
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false
        }
    } 
    return true;
}
 console.log(areArraySame([1,2,3] , [4,5,6]));
 console.log(areArraySame([1,2,3] , [1,2,3]));
 console.log(areArraySame([1,2,3], [1,2,3,4]));











