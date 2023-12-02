/* Commute cost calculator
* Use 3 variables:
* 1- Fuel price
* 2- Average fuel per 100 km
* 3- Trip distance in km
*
* Show the commute cost in the console 
*/

const fuelPrice = 3.48; /* $ per liter */
const kmPerLiter = 11.6; 
const distanceKm = 80;
const fuelConsumption = distanceKm / kmPerLiter;
const commuteCost = fuelConsumption * fuelPrice;

console.log(commuteCost.toFixed(2));