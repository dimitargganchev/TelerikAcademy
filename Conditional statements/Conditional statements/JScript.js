
//Problem 1. Exchange if greater
function myFun() {
    var a = document.getElementById('input1').value,
        b = document.getElementById('input2').value,
        numA = parseFloat(a),
        numB = parseFloat(b);

    if (numA > numB) {
        document.getElementById('resulat').innerHTML = 'Result: ' + numB + ', ' + numA;
    } else if (numA < numB) {
        document.getElementById('resulat').innerHTML = 'Result: ' + numA + ', ' + numB;
    } else {
        document.getElementById('resulat').innerHTML = 'Result: ' + 'Try again :)';
    }
}
document.getElementById('btSb').addEventListener('click', myFun);


//Problem 2. Multiplication Sign
function myFunTwo() {
    var a = document.getElementById('input3').value,
        b = document.getElementById('input4').value,
        c = document.getElementById('input5').value,
        numA = parseFloat(a),
        numB = parseFloat(b),
        numC = parseFloat(c);

    if (!isNaN(numA) && !isNaN(numB) && !isNaN(numC) && numA !== '' && numB !== '' && numC !== '') {
        if (numA === 0 || numB === 0 || numC === 0) {
            document.getElementById('resulat').innerHTML = ' 0 ';
        } else if (numA > 0 && numB > 0 && numC > 0) {
            document.getElementById('resulat').innerHTML = ' + ';
        } else if (numA < 0 && numB < 0 && numC < 0) {
            document.getElementById('resulat').innerHTML = ' - ';
        } else if ((numA < 0 && numB < 0) || (numA < 0 && numC < 0) || (numB < 0 && numC < 0)) {
            document.getElementById('resulat').innerHTML = ' + ';
        } else if (numA < 0 || numB < 0 || numC < 0) {
            document.getElementById('resulat').innerHTML = ' - ';
        }
    } else {
        document.getElementById('resulat').innerHTML = 'Try again :)';
    }
}
document.getElementById('btSbTwo').addEventListener('click', myFunTwo);

//Problem 3. The biggest of Three
function myFunThree() {
    var a = document.getElementById('input6').value,
        b = document.getElementById('input7').value,
        c = document.getElementById('input8').value,
        numA = parseFloat(a),
        numB = parseFloat(b),
        numC = parseFloat(c);

    if (!isNaN(numA) && !isNaN(numB) && numA && !isNaN(numC) && numA !== '' && numB !== '' && numC !== '') {
        if ((numA >= numB) && (numA >= numC)) {
            document.getElementById('resulat').innerHTML = numA;
        } else if ((numB >= numA) && (numB >= numC)) {
            document.getElementById('resulat').innerHTML = numB
        } else if ((numC >= numA) && (numC >= numB)) {
            document.getElementById('resulat').innerHTML = numC;
        } 
    } else {
        document.getElementById('resulat').innerHTML = 'Try again :)';
    }
}
document.getElementById('btSbThree').addEventListener('click', myFunThree);

//Problem 4. Sort 3 numbers
function myFunFour() {
    var a = document.getElementById('input9').value,
        b = document.getElementById('input10').value,
        c = document.getElementById('input11').value,
        numA = parseFloat(a),
        numB = parseFloat(b),
        numC = parseFloat(c);

    if (!isNaN(numA) && !isNaN(numB) && numA && !isNaN(numC) && numA !== '' && numB !== '' && numC !== '') {
        if (numA > numB && numB > numC && numA > numC) {
            document.getElementById('resulat').innerHTML = numA + ', ' + numB + ', ' + numC;
        } else if (numA > numC && numC > numB && numA > numB) {
            document.getElementById('resulat').innerHTML = numA + ', ' + numC + ', ' + numB;
        } else if (numB > numA && numA > numC && numB > numC) {
            document.getElementById('resulat').innerHTML = numB + ', ' + numA + ', ' + numC;
        } else if (numB > numC && numC > numA && numB > numA) {
            document.getElementById('resulat').innerHTML = numB + ', ' + numC + ', ' + numA;
        } else if (numC > numA && numA > numB && numC > numB) {
            document.getElementById('resulat').innerHTML = numC + ', ' + numA + ', ' + numB;
        } else if (numC > numB && numB > numA && numC > numA) {
            document.getElementById('resulat').innerHTML = numC + ', ' + numB + ', ' + numA;
        } else if (numC === numB && numB < numA) {
            document.getElementById('resulat').innerHTML = numA + ', ' + numB + ', ' + numC;
        } else if (numC > numB && numB === numA) {
            document.getElementById('resulat').innerHTML = numC + ', ' + numB + ', ' + numA;
        } else if (numC === numA && numB > numA) {
            document.getElementById('resulat').innerHTML = numB + ', ' + numA + ', ' + numC;
        } else if (numC === numA && numA === numB && numB === numC) {
            document.getElementById('resulat').innerHTML = numB + ', ' + numA + ', ' + numC;
        }
    } else {
        document.getElementById('resulat').innerHTML = 'Try again :)';
    }
}
document.getElementById('btSbFour').addEventListener('click', myFunFour);

//Problem 5. Digit as word
function myFunFive() {
    var a = document.getElementById('input12').value,
        n = +a;

    switch (!isNaN(n) && n !== '') {
        case (n === 0): document.getElementById('resulat').innerHTML = 'Zero'; break;
        case (n === 1): document.getElementById('resulat').innerHTML = 'One'; break;
        case (n === 2): document.getElementById('resulat').innerHTML = 'Two'; break;
        case (n === 3): document.getElementById('resulat').innerHTML = 'Three'; break;
        case (n === 4): document.getElementById('resulat').innerHTML = 'Four'; break;
        case (n === 5): document.getElementById('resulat').innerHTML = 'Five'; break;
        case (n === 6): document.getElementById('resulat').innerHTML = 'Six'; break;
        case (n === 7): document.getElementById('resulat').innerHTML = 'Seven'; break;
        case (n === 8): document.getElementById('resulat').innerHTML = 'Eight'; break;
        case (n === 9): document.getElementById('resulat').innerHTML = 'Nine'; break;
        case (n === ''): document.getElementById('resulat').innerHTML = 'not a digit'; break;
        default: document.getElementById('resulat').innerHTML = 'not a digit'; break;
    }
}
document.getElementById('btSbFive').addEventListener('click', myFunFive);

//Problem 6. Quadratic equation
function myFunSix() {
    var a = document.getElementById('input13').value,
        b = document.getElementById('input14').value,
        c = document.getElementById('input15').value,
        D = (b * b) - (4 * (a * c));

    if (!isNaN(a) && a !== '' && !isNaN(b) && b !== '' && !isNaN(c) && c !== '' && !isNaN(D) && D !== '') {
        if (D < 0) {
            document.getElementById('resulat').innerHTML = 'no real roots';
        } else if (D === 0) {
            document.getElementById('resulat').innerHTML = 'x1=x2= ' + (-b/(2*a));
        } else if (D > 0) {
            document.getElementById('resulat').innerHTML = 'x1= ' + ((-b + Math.sqrt(D)) / (2 * a)) + ', ' + 'x2= ' + ((-b - Math.sqrt(D)) / (2 * a));
        }
    }
}
document.getElementById('btSbSix').addEventListener('click', myFunSix);

//Problem 7. The biggest of five numbers
function myFunSeven() {
    var numa = document.getElementById('input16').value,
        numb = document.getElementById('input17').value,
        numc = document.getElementById('input18').value,
        numd = document.getElementById('input19').value,
        nume = document.getElementById('input20').value,
        a = +numa,
        b = +numb,
        c = +numc,
        d = +numd,
        e = +nume;

    if ((a >= b) && (a >= c) && (a >= d) && (a >= e)) {
        document.getElementById('resulat').innerHTML = 'Result= ' + a;
    } else if ((b >= a) && (b >= c) && (b >= d) && (b >= e)) {
        document.getElementById('resulat').innerHTML = 'Result= ' + b;
    } else if ((c >= a) && (c >= b) && (c >= d) && (c >= e)) {
        document.getElementById('resulat').innerHTML = 'Result= ' + c;
    } else if ((d >= a) && (d >= b) && (d >= c) && (d >= e)) {
        document.getElementById('resulat').innerHTML = 'Result= ' + d;
    } else {
        document.getElementById('resulat').innerHTML = 'Result= ' + e;
    }
}
document.getElementById('btSbSeven').addEventListener('click', myFunSeven);

//Problem 8. Number as words
function myFunEight() {
    var numa = document.getElementById('input21').value,
        a = numa | 0,
        number = a % 10,
        numTeen = number + 10,
        numTen = Math.floor(a / 10) % 10,
        numHund = Math.floor(a / 100),
        numText = '',
        numTeenText = '',
        numTenText = '',
        numHundText = '';

    switch (numTeen) {
        case 11:
            numTeenText = 'eleven';
            break;
        case 12:
            numTeenText = 'twelve';
            break;
        case 13:
            numTeenText = 'thirteen';
            break;
        case 14:
            numTeenText = 'fourteen';
            break;
        case 15:
            numTeenText = 'fifteen';
            break;
        case 16:
            numTeenText = 'sixteen';
            break;
        case 17:
            numTeenText = 'seventeen';
            break;
        case 18:
            numTeenText = 'eighteen';
            break;
        case 19:
            numTeenText = 'nineteen';
            break;
        case (a < 0 || a > 999 || isNaN(a)):
            document.getElementById('resulat').innerHTML = 'The number should be between 0 and 999 :)';
            break;
        default:;
            break;
    }

    switch (numHund) {
        case 1:
            numHundText = 'one hundred';
            break;
        case 2:
            numHundText = 'two hundred';
            break;
        case 3:
            numHundText = 'three hundred';
            break;
        case 4:
            numHundText = 'four hundred';
            break;
        case 5:
            numHundText = 'five hundred';
            break;
        case 6:
            numHundText = 'six hundred';
            break;
        case 7:
            numHundText = 'seven hundred';
            break;
        case 8:
            numHundText = 'eight hundred';
            break;
        case 9:
            numHundText = 'nine hundred';
            break;
        case 0:
            numHundText = '';
            break;
        case (a < 0 || a > 999 || isNaN(a)):
            document.getElementById('resulat').innerHTML = 'The number should be between 0 and 999 :)';
            break;
        default:;
            break;
    }
    if (a % 100 !== 0 && a >= 100) {
        numHundText = numHundText + ' and ';
    }
    if (numTen === 1 && number> 0) {
        document.getElementById('resulat').innerHTML = numHundText + numTeenText;
    }

    switch (numTen) {
        case 1:
            numTenText = 'ten';
            break;
        case 2:
            numTenText = 'twenty';
            break;
        case 3:
            numTenText = 'thirty';
            break;
        case 4:
            numTenText = 'forty';
            break;
        case 5:
            numTenText = 'fifty';
            break;
        case 6:
            numTenText = 'sixty';
            break;
        case 7:
            numTenText = 'seventy';
            break;
        case 8:
            numTenText = 'eighty';
            break;
        case 9:
            numTenText = 'ninety';
            break;
        case 0:
            numTenText = '';
            break;
        case (a < 0 || a > 999 || isNaN(a)):
            document.getElementById('resulat').innerHTML = 'The number should be between 0 and 999 :)';
            break;
        default:;
            break;
    }

    switch (number) {
        case 1:
            numText= 'one';
            break;
        case 2:
            numText= 'two';
            break;
        case 3:
            numText= 'three';
            break;
        case 4:
            numText= 'four';
            break;
        case 5:
            numText= 'five';
            break;
        case 6:
            numText= 'six';
            break;
        case 7:
            numText= 'seven';
            break;
        case 8:
            numText= 'eight';
            break;
        case 9:
            numText= 'nine';
            break;
        case (a < 0 || a > 999 || isNaN(a)):
            document.getElementById('resulat').innerHTML = 'The number should be between 0 and 999 :)';
            break;
        default:
            numText= '';
            break;

    } 
    if (a === 0) {
        document.getElementById('resulat').innerHTML = 'Zero';
    }
    if (a <= 10 || a >= 20) {
        document.getElementById('resulat').innerHTML = numHundText + numTenText + ' ' + numText;
    }
}

document.getElementById('btSbEight').addEventListener('click', myFunEight);