const km = parseFloat (prompt('Quanti chilometri percorrerai?'));

const età = parseInt (prompt('Quanti anni hai?'));

const priceKm = 0.21; 

const price = km * priceKm;

console.log(km, età, price);

const youngerDiscount = price - (price * 20 / 100);

const olderDiscount = price - (price * 40 / 100);

console.log(youngerDiscount, olderDiscount);



// if (età < 18) {
//   younger
// }else if (età >= 65) {
//   older 
// } 

