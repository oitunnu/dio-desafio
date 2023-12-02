/* Commute cost calculator
* Use 5 variables:
* 1- Ethanol price;
* 2- Gasoline price;
* 3- Type of fuel;
* 4- Average amount of km per 1 liter of fuel;
* 5- Trip distance in km.
*
* Show the commute cost in the console 
*/

const ethanolPrice = 3.64; /* $ per liter */
const gasPrice = 5.62;
const fuelPrice = gasPrice;
const kmPerLiter = 11.6; 
const distanceKm = 80;
const fuelConsumption = distanceKm / kmPerLiter;

if (fuelPrice === ethanolPrice) {
    const commuteCost = fuelConsumption * ethanolPrice;
    console.log('Commute cost using ethanol is ' + commuteCost.toFixed(2));
} else {
    const commuteCost = fuelConsumption * gasPrice;
    console.log('Commute cost using gasoline is ' + commuteCost.toFixed(2));
} 
