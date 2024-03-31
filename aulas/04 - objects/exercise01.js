/*  Create a class to represent a person.
    The attributes are: name, weight and height.
    A person should be able to tell his/her BMI.
    Create a person called Josh who weighs 70kg and has 1.75 m, ans ask Josh to say his BMI.
*/

class Person {
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculateBMI() {
        return this.weight / (this.height ** 2);
    }

    classifyBMI() {
        const bmi = this.calculateBMI();

        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            return 'Overweight';
        } else {
            return 'Obesity';
        }
    }
}

const josh = new Person('Josh', 70, 1.75);

console.log(josh.calculateBMI());
console.log(josh.classifyBMI());