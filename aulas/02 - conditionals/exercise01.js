/* Calculate student's mean score and his grade using 3 scores.
*
* Mean = (score 1 + score 2 + score 3) / 3;
*
* Grade:
* - Mean < 5, fail;
* - Mean between 5 and 7, retake;
* - Mean > 7, pass.
*/

const score1 = 7.00;
const score2 = 7.00;
const score3 = 7.00;
const mean = (score1 + score2 + score3) / 3;

if (mean >= 7) {
    console.log('Pass');
} else if (mean < 5) {
    console.log(' Fail');
} else {
    console.log('Retake');
}

console.log(mean.toFixed(2))