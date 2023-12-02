/* Calculate ideal body weight (IBW) and body mass index (BMI). Show the categories.
*
* IBW for men = 22 * (height * height)
* IBW for women = 22 * ((height - 0.10)**2)
* BMI = weight / (height * height)
*
* BMI:
* Underweight = below 18.5
* Normal weight = 18.5–24.9
* Overweight = 25–29.9
* Obesity = above 30
*
*/ 

const height = 1.50;
const weight = 50;
const BMI = weight / (height ** 2);
const IBWm = 22 * (height ** 2);
const IBWw = 22 * ((height - 0.10)**2);


if (BMI < 18.5) {
    console.log('Underweight = ' + BMI.toFixed(2));
} else if (BMI >= 18.5 && BMI < 25) {
    console.log('Normal weight = ' + BMI.toFixed(2));
} else if (BMI >= 25 && BMI < 30) {
    console.log('Overweight = ' + BMI.toFixed(2));
} else {
    console.log('Obesity = ' + BMI.toFixed(2));
}

console.log(IBWm.toFixed(2));
console.log(IBWw.toFixed(2));