function greet() {
    console.log('Hello there');
}

// function expression
const speak = function () {
    console.log('good day');
};
greet();
speak();

// function arguments and parameters
function greeting(name) {
    console.log(`Good day ${name}`);
}

greeting(name);

// return value

// function calcArea(radius) {
//     let area = 3.14 * radius ** 2;
//     return area;
// }



// arrow function
const calcArea = (radius) => {
    let area = 3.14 * radius ** 2;
    return area;
};


const area = calcArea(5);
console.log(area);