console.log('Пункт №4');

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));


function minus(a, b) {
    return a - b;
}

console.log(minus(3, 3));


function mult(a, b) {
    return a * b;
}

console.log(mult(3, 3));


function del(a, b) {
    return a / b;
}

console.log(del(6, 3));



console.log('Пункт №5');

function count(numeric) {
    
    for(let i = 1; i <= numeric; i++) {
        console.log(i);
    }
}

count(5);



console.log('Пункт №6');

function countDown(numeric) {
    for(let i = numeric; i > 0; i--) {
        console.log(i);
    }
}

countDown(5);



console.log('Пункт №7');

function pow(x, n) {

    // let result = x;

    // for(let i = 1; i < n; i++) {
    //     result *= x;
    // }
    // return result;

    return Math.pow(x, n);
}

console.log(pow(3, 2));



console.log('Пункт №8');

function isBigger(a, b) {
    return a > b; 
}

console.log(isBigger(5, -1));



console.log('Пункт №9');

function isSmaller(a, b) {
    return a < b;
}

console.log(isSmaller(5, -1));