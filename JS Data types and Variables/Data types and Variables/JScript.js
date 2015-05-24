//Problem 1. JavaScript literals
var nub = 7,
    int = nub | 0,
    float = 2.04,
    str = 'Hello ',
    bln = true,
    undefind = undefined,
    obj = {
      city: 'Varna',
      age: 25
    },
    arry = [1, 5, 10],
    nullValue = null,
    quotedText = '"How you doin?", Joey said';

console.log('Problem 1. JavaScript literals: ' + nub + ', ' + int + ', ' + float + ', ' + str + ', ' +
            bln + ', ' + undefind +  ', ' + '[' + arry + ']' + ', ' + nullValue + ', ')
console.log(obj)

//Problem 2. Quoted text

console.log('Problem 2. Quoted text: ' + quotedText)

//Problem 3. Typeof variables
console.log('Problem 3. Typeof variables: ' + typeof nub + ', ' + typeof int + ', ' + typeof float + ', ' + typeof str +
            ', ' + typeof bln + ', ' + typeof undefind + ', ' + typeof obj + ', ' + typeof arry)

//Problem 4. Typeof null
console.log('Problem 4. Typeof null: ' + typeof undefind + ', ' + typeof nullValue)