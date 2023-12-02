/* boolean */

let number = 23;

const isEven = (number % 2) === 0;

console.log(isEven)

/* conditional */
if (isEven) {
    console.log('Even');
}

if (!isEven) {
    console.log('Odd');
}

/* same as above */
if (isEven) {
    console.log('Even');
} else {
    console.log('Odd');
}

number = 0;

/* same as above with stop */
if (number === 0) {
    console.log('Invalid number');
} else if (isEven) {
    console.log('Even');
} else {
    console.log('Odd');
}