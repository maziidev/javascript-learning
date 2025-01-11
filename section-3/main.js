// control flow
// - looping;
// - conditionaling

// LOOPS
// -for loops

for (let i = 0; i < 5; i++) {
    console.log('welcome');
}

const names = ['shaun', 'mario', 'luigi'];
for (let i = 0; i < names.length; i++) {
    console.log(`(${i + 1}). ${names[i]}`);
}

// while loop
// let i = 0;
// while (i < 10) {
//     console.log('in loop');
//     i++;
// }

// do while loops
let i = 5;
do {
    console.log('val of i is:', i);
    i++;
} while (i < 5);


// if statements
const age = 25;

if (age > 20) {
    console.log('you are over 20 years old');
}


const password = 'password1234';

if (password.length >= 12) {
    console.log('pass word is might strong');
} else if (password.length >= 8) {
    console.log('password is strong and long enough');
} else {
    console.log('password is not long enough');
}

// switch statement
const grade = 'D';

switch (grade) {
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got a B!');
        break;
    case 'C':
        console.log('You got a C!');
        break;
    case 'D':
        console.log('You got a D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('You got an F!');
}