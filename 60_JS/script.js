const konstanta = 12345;
console.log(konstanta);
let number1 = 52.5;
console.log(number1);
let number2 = -158;
console.log(number2);

console.log((number1 + number2 / 5 - konstanta) ** 4);
console.log(number1 % 10);
console.log(number1 == "52.5");
console.log(number1 === "52.5");


let number3 = null;
let number4;
console.log(number3, number4);
number3 = 56;
number4 = 0;
console.log(number3, number4);

let booleanVar1 = 5 == "5";
let booleanVar2 = 5 === "5";
let booleanVar3 = 4 <= 8;
let booleanVar4 = "1" != 1;
console.log(booleanVar1, booleanVar2, booleanVar3, booleanVar4);


let firstName = "Petras";
let lastName = "Petraitis";
console.log(`Sveiki, ${firstName} ${lastName}`);


document.getElementsByTagName("p")[0].style.color = "blue";
document.getElementsByClassName("magenta")[1].style.color = "magenta";
