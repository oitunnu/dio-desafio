/*  Calculate the due payment following the instructions given.
*
* Payment methods guideline:
* 1 - Debit Card, 10% discount;
* 2 - Cash or Pix, 15% discount;
* 3 - 2 installments, normal price without interest;
* 4 - above 2 installments, normal price + 10 % interest.
*/

const normalPrice = 15;
const paymentMethod = 1;

if (paymentMethod === 1) {
    console.log(normalPrice - (0.1 * normalPrice));
} else if (paymentMethod === 2) {
    console.log(normalPrice - (0.15 * normalPrice));
} else if (paymentMethod === 3) {
    console.log(normalPrice);
} else {
    console.log(normalPrice + (normalPrice * 0.10));
}
    