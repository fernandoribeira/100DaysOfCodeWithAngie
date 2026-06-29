/*

Coding Challenge #1 
Mark and John are trying to compare their BMI (Body Mass Index), which is  calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). 
Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 
Test data: 
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

let markMass;
let markHeight;
let markBMI;

let markHigherBMI;

let johnMass;
let johnHeight;
let johnBMI;

// Data 1

markMass = 78;
markHeight = 1.69;
markBMI = markMass / (markHeight * markHeight);

johnMass = 92;
johnHeight = 1.95;
johnBMI = johnMass / (johnHeight * johnHeight);

markHigherBMI = markBMI > johnBMI;
console.log("Mark BMI = " + markBMI);
console.log("John BMI = " + johnBMI);
console.log("Mark has a higher BMI than John?" + " " + markHigherBMI);

// Data 2

markMass = 95;
markHeight = 1.88;
markBMI = markMass / (markHeight * markHeight);

johnMass = 85;
johnHeight = 1.76;
johnBMI = johnMass / (johnHeight * johnHeight);

markHigherBMI = markBMI > johnBMI;
console.log("Mark BMI = " + markBMI);
console.log("John BMI = " + johnBMI);
console.log("Mark has a higher BMI than John?" + " " + markHigherBMI);
