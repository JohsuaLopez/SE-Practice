const students = [
  { name: "Leo", score: 82, year: 1 },
  { name: "Mia", score: 95, year: 2 },
  { name: "Sam", score: 67, year: 1 },
  { name: "Ava", score: 74, year: 2 },
  { name: "Max", score: 58, year: 1 }
];

const items = [
  { name: "Pen",  price: 2,  qty: 10 },
  { name: "Lamp", price: 25, qty: 1 },
  { name: "Mug",  price: 8,  qty: 3 }
];


// first i need to check which students passed. filter for this

// then i need to check the average score for students. could use reduce

// after i need to find the top student and return their name. could use best. ill sort their scores highest to lowest and return the first 

// then order each student by year from smallest to largest

// then i need to find the most expensive item. 




let passing = students.filter(s => s.score >= 70).map(s => s.name).sort();

let average = students.reduce((sum,s) => sum + s.score , 0) / students.length;

let best = [...students].sort((a,b) => b.score - a.score)[0]?.name;

let year = [...students].sort((a,b) => a.year - b.year);
const grouped = {};
for (const s of year) {
  grouped[s.year] = grouped[s.year] || [];
  grouped[s.year].push(s.name);
}

// items


const expensive = (items, min) => items.filter(it => it.price > min).sort((a, b) => b.price - a.price).map(it => it.name);




console.log(passing);

console.log(average);

console.log(best);

console.log(grouped);


console.log(expensive(items, 2));