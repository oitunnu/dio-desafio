/*  Calculate the due payment following the instructions given.
*
* Payment methods guideline:
* 1 - Debit Card, 10% discount;
* 2 - Cash or Pix, 15% discount;
* 3 - 2 installments, normal price without interest;
* 4 - above 2 installments, normal price + 10 % interest.
*/

const normalPrice = 15;
const paymentMethod = 4;
const discount = 15;

function applyDiscount(discount, value) {
    return value - ((discount/100) * value)
}

function applyInterest(interest, value) {
    return value + ((interest/100) * value)
}

if (paymentMethod === 1) {
    console.log(applyDiscount(discount, normalPrice));
} else if (paymentMethod === 2) {
    console.log(applyDiscount(discount, normalPrice));
} else if (paymentMethod === 3) {
    console.log(normalPrice);
} else {
    console.log(applyInterest(10, normalPrice));
}


    