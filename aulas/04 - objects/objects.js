// class; description
class Cat {
    catName;
    catAge;
    yearOfBirth;

    // instance; built; 
    constructor(catName, catAge) {
        this.catName = catName;
        this.catAge = catAge;
        this.yearOfBirth = 2023 - catAge;
    }

    // function
    describe() {
        this
        console.log(`My name is ${this.catName} and I am ${this.catAge} years old`);
    }
}

// object; instance
const cat = {
    petName: 'Catlin',
    petAge: 3,

    describe: function () {
        this
        console.log(`My name is ${this.petName} and I am ${this.petAge} years old`);
    }
};

/*cat.servant = 'Sir Leopold';
cat['petName'] = 'Miaulin';
cat.petName = 'Darlin';

cat.describe(); */

const catlin = new Cat('Catlin D Cat', 3);
const miaulin = new Cat('Miaulin Ng', 2);

console.log(catlin);
console.log(miaulin);

catlin.describe();

//function
function compareAge(c1, c2) {
    if (c1.catAge > c2.catAge) {
        console.log(`${c1.catName} is older than ${c2.catName}`);
    } else if (c2.catAge > c1.catAge) {
        console.log(`${c2.catName} is older than ${c1.catName}`);
    } else {
        console.log(`${c1.catName} and ${c2.catName} have the same age`);
    } 
}

compareAge(catlin, miaulin);