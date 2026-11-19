//names of items with qty over 2 (filter, then map)
//every price with 8% tax added, rounded to 2 decimals (map)
//the first item that costs more than $5 (find) — then change 5 to 50 and see what comes back



const items = [
  { name: "Pen",  price: 2,  qty: 10 },
  { name: "Lamp", price: 25, qty: 1 },
  { name: "Mug",  price: 8,  qty: 3 }
];
/** 
const cheap   = items.filter(it => it.price < 10);                  // Pen, Mug
const names   = items.map(it => it.name);                           // ["Pen", "Lamp", "Mug"]
const lamp    = items.find(it => it.name === "Lamp");               // { name: "Lamp", ... }
const total   = items.reduce((sum, it) => sum + it.price * it.qty, 0); // 69
const byPrice = [...items].sort((a, b) => b.price - a.price);       // Lamp, Mug, Pen

**/
const itemqty2 = items.filter(it => it.qty > 2).map(it => it.name);

const tax = 0.08

const num2 = items.map(it => it.price - it.price * tax);


const test = items.find(it => it.price > 5 );

console.log(test,"Third req");

console.log(itemqty2,"First req");
console.log(num2,"Second req");