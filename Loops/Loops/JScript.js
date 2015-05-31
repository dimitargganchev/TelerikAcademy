//Problem 1. Numbers
function myFunOne() {
    var m = document.getElementById('first-task').value,
    i;
    m = +m;

    for (i = 0; i <= m; i += 1) {
        console.log ('Result: ' + i)
    }
}

document.getElementById('submitOne').addEventListener('click', myFunOne);

//Problem 2. Numbers not divisible

function myFunTwo() {
    var m = document.getElementById('second-task').value,
        i;
  
    m = +m;

    for (i = 1; i <= m; i += 1) {
        if (i % 3 && i % 7) {
            console.log('Result: ' + i);
        } else {
            console.log('Number is divisible by 3 or 7')
        }
        }
    }

document.getElementById('submitTwo').addEventListener('click', myFunTwo);

//Problem 3. Min/Max of sequence
function myFunThree() {
    var number = document.getElementById('thirt-task').value,
        num = number.split([]);

    num.sort(function (a, b) {
        return b - a;
    });
        console.log('Max= ' + num[0]);

    num.sort(function (a, b) {
        return a - b;
    });
    console.log('Mix= ' + num[0]);
}    

document.getElementById('submitThree').addEventListener('click', myFunThree);

//Problem 4. Lexicographically smallest
function myFunFour() {
    var smallest = 'dfs',
        largest = '',
        prop;

    for (prop in document) {
        if (prop < smallest) {
            smallest = prop;
        }
        if (prop > largest) {
            largest = prop;
        }
    }

    console.log('Document: ' + 'Smallest: ' + smallest + ' and Largest: ' + largest);
    smallest = 'dfs';
    largest = '';

    for (prop in window) {
        if (prop < smallest) {
            smallest = prop;
        }
        if (prop > largest) {
            largest = prop;
        }
    }

    console.log('Window: ' + 'Smallest: ' + smallest + ' and Largest: ' + largest);
    smallest = 'dfs';
    largest = '';

    for (prop in navigator) {
        if (prop < smallest) {
            smallest = prop;
        }
        if (prop > largest) {
            largest = prop;
        }
    }

    console.log('Navigator: ' + 'Smallest: ' + smallest + ' and Largest: ' + largest);
}
document.getElementById('submitFour').addEventListener('click', myFunFour);

