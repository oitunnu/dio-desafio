function calculateBMI(weight, height) {
    return weight / (height ** 2);
}

function classifyBMI(BMI) {
    if (BMI < 18.5) {
        return 'Underweight';
    } else if (BMI >= 18.5 && BMI < 25) {
        return 'Normal weight';
    } else if (BMI >= 25 && BMI < 30) {
        return 'Overweight';
    } else {
        return 'Obesity';
    } 
}

// main; executed once
(function () {
    const height = 1.50;
    const weight = 50;
    const BMI = calculateBMI(weight, height);
    console.log(classifyBMI(BMI));

})();

