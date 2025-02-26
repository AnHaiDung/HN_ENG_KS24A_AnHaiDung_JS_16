let number1 = parseInt(prompt("nhap so thu nhat"));
let number2 = parseInt(prompt("nhap so thu hai"));

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

alert(getRndInteger(number1, number2));