/*  Create a class for car.
    A car has a make, a color, and an average amount of fuel per kilometre.
    Create a method to calculate a trip cost given the distance in km and the fuel price.
*/

class Car {
    make;
    color;
    fuelPerKm;

    constructor(make, color, fuelPerKm) {
        this.make = make;
        this.color = color;
        this.fuelPerKm = fuelPerKm;
    }

    calculateTripCost(distanceInKm, fuelPrice) {
        return distanceInKm * this.fuelPerKm * fuelPrice;
    }
}

const mazda3 = new Car('Mazda', 'Crystal White Pearl', 0.071)
console.log(mazda3.calculateTripCost(70, 4.75))