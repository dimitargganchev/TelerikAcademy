//Problem 1. Odd or Even

function myFunOne() {
    var number = document.getElementById('text').value;
    if (number % 2 === 0) {
        console.log('This is even');
    }
    else {
        console.log('This is odd');
    }
}

//Problem 2. Divisible by 7 and 5

function myFunTwo() {
    var number = document.getElementById('text-two').value;
    if ((number % 5 === 0) && (number % 7 === 0)) {
        console.log('True');
    }
    else {
        console.log('False');
    }
}

//Problem 3. Rectangle area

function myFunThree() {
    var widht = document.getElementById('widht').value,
        height = document.getElementById('height').value,
        result = widht * height;
    console.log('Area is ' + result);
}

//Problem 4. Third digit
function myFunFour() {
    var number = document.getElementById('text-four').value,
        numRev = number.split("").reverse();
    if (numRev[2] === '7') {
        console.log('True');
    }
    else {
        console.log('False');
    }
}

//Problem 5. Third bit
function myFunFive() {
    var number = document.getElementById('text-five').value,
        bitNum = ((number >> 3) & 1);
    console.log('Bitwise nubmber is: ' + bitNum);
}

//Problem 6. Point in Circle
function myFunSix() {
    var x = document.getElementById('nub-x-rad').value,
        y = document.getElementById('nub-y-rad').value,
        nubX = parseFloat(x),
        nubY = parseFloat(y);
    if ((x * x + y * y) <= 25){
        console.log('True');
    }
    else {
        console.log('False');
    }
}

//Problem 7. Is prime
function myFunSeven() {
    var number = document.getElementById('numb-prim').value,
        isPrime = true;
    if (!isNaN(number) && number !== '') {
        if (number > 1) {
            for (var i = 2; i < number; i+=1) {
                if (number % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        else {
            isPrime = false;
        }
        console.log('This is prime: ' + isPrime);
    } else {
        console.log ('Invalid integer');
    }
}

//Problem 8. Trapezoid area
function myFunEight() {
    var a = document.getElementById('a-side').value,
        b = document.getElementById('b-side').value,
        h = document.getElementById('h-hyp').value,
        nubA = parseFloat(a),
        nubB = parseFloat(b),
        nubH = parseFloat(h);
    if (!isNaN(a) && !isNaN(b) && !isNaN(h)) {
        console.log('Result= ' + (((nubA + nubB) / 2) * nubH));
    }
}

//Problem 9. Point in Circle and outside Rectangle
function myFunNine() {
    var x = document.getElementById('x-nub').value,
        y = document.getElementById('y-nub').value,
        x = parseFloat(x),
        y = parseFloat(y),
        inCrcl = ((x - 1) * (x - 1)) + ((y - 1) * (y - 1)) <= 9 && Math.abs(y - 1) < 3,
        result = outRtg && inCrcl,
        outRtg = true;
    if (x >= -1 && x <= 5) {
        if (y >= -1 && y <= 1) {
            outRtg = false;
        }
    }
    else if (y >= -1 && y <= 1) {
        if (x >= -1 && x <= 5) {
            outRtg = false;
        }
    }
    if (result === true) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }
    console.log('Circle: ' + inCrcl);
    console.log('Rectangle: ' + outRtg);
}