//Problem 1. Increase array members
var i,
    len,
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function myFunOne() {
    for (i = 0, len = arr.length; i < len; i += 1) {
        console.log(arr[i] * 5);
    }
}

document.getElementById('itemOne').addEventListener('click', myFunOne);

//Problem 2. Lexicographically comparison
function myFunTwo() {
    var i,
        leth,
        first = document.getElementById('one').value,
        second = document.getElementById('two').value;

    leth = Math.min(first.length, second.length);

    if (first !== '' && second !== '') {
        for (i = 0; i < leth; i += 1) {
            if (first[i] < second[i]) {
                console.log(first + ' < ' + second);
            } else if (first[i] > second[i] ) {
                console.log (first + ' > ' + second)
            } else if (first[i] === second[i]) {
                console.log (first[i] + ' = ' + second[i])
            }
        }
    } else {
        console.log ('Enter two strings')
    }

}

document.getElementById('itemTwo').addEventListener('click', myFunTwo);

//Problem 3. Maximal sequence
function myFunThree() {
    var i,
        p,
        arr = [33, 44, 55, 33, 33, 44, 77, 88, 99, 00, 33],
        digit = 1,
        arrMax = digit,
        firstDigit;

    console.log(arr);
    
    for (i = 1, len = arr.length; i < len; i += 1) {

        if (arr[i] === arr[i - 1]) {
            digit += 1;
        }
        else {
            digit = 1;
        }

        if (digit > arrMax) {
            arrMax = digit;
            firstDigit = i + 1 - arrMax;
        }
    }
    for (p = firstDigit; p < firstDigit + arrMax; p += 1) {

        if (firstDigit + arrMax - 1 === p) {
            console.log(arr[p]);
            break;
        }
        console.log(arr[p] + ', ');
    }

}
document.getElementById('itemThree').addEventListener('click', myFunThree);

//Problem 4. Maximal increasing sequence
function myFunFour() {
    var i,
        p,
        arr = [33, 44, 55, 33, 33, 44, 77, 78, 79, 00, 33, 44, 44, 44, 44],
        digit = 1,
        arrMax = digit,
        firstDigit;

    console.log(arr);

    for (i = 1, len = arr.length; i < len; i += 1) {

        if (arr[i] - 1 === arr[i - 1]) {
            digit += 1;
        }
        else {
            digit = 1;
        }

        if (digit > arrMax) {
            arrMax = digit;
            firstDigit = i + 1 - arrMax;
        }
    }
    for (p = firstDigit; p < firstDigit + arrMax; p += 1) {

        if (firstDigit + arrMax - 1 === p) {
            console.log(arr[p]);
            break;
        }
        console.log(arr[p] + ', ');
    }

}
document.getElementById('itemFour').addEventListener('click', myFunFour);

//Problem 5. Selection sort
function myFunFive() {
    var arr = [2, 1, 4, 8, 6, 7, 9, 7, 5, 4],
        numburs = arr;

    console.log (arr)

    arr.sort(function (a,b) { 
        return a - b;
    })
    console.log('Selection sorted array: ' +  ' ' + '[' + arr + ']');

}

document.getElementById('itemFive').addEventListener('click', myFunFive);

//Problem 6. Most frequent number
function myFunSix() {
    var p,
        i = '',
        maxNum = 0,
        arr = [2, 1, 4, 8, 6, 7, 9, 7, 5, 4, 7],
        arrSec = [];
    
    console.log(arr);

    for (p in arr) {
        if (arrSec[p]) {
            arrSec[p] += 1;
        } else {
            arrSec[p] = 1;
        }
        if (maxNum < arrSec[p]) {
            i = 0;
            maxNum = arrSec[p];
        }
    }
    console.log ('Most frequent number: ' + arr[p])
}

document.getElementById('itemSix').addEventListener('click', myFunSix);

//Problem 7. Binary search
function myFunSeven() {
    function arrMid(arr, key) {

        var min = 0,
            max = arr.length - 1,
            middle = -1;

        while (min <= max) {
            var mid = min + (max - min) / 2;
            mid = mid | 0;
            if (arr[mid] > key) {
                max = mid - 1;
            }
            else if (arr[mid] < key) {
                min = mid + 1;
            }
            else {
                middle = mid;
                break;
            }
        }

        console.log('Index of element ' + key + ' is ' + middle);
    }


    arrMid([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6);
}
document.getElementById('itemSeven').addEventListener('click', myFunSeven);