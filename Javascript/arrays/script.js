// from [{name, category, price, qty}], return total value per category and the 3 most expensive items.

let arr = [
        { name: "Laptop", category: "Electronics", price: 1200, qty: 2 },
        { name: "Mouse", category: "Electronics", price: 25, qty: 10 },
        { name: "Desk Chair", category: "Furniture", price: 300, qty: 3 },
        { name: "Coffee Mug", category: "Kitchen", price: 15, qty: 20 },
        { name: "Monitor", category: "Electronics", price: 400, qty: 4 }
    ]
// if the category is whatever one you must add that objects value
// to get an objects value you have to multiply price times the quantity 
// then return the 3 most expensive items
let eValue = 0;
let fValue = 0;
let kValue = 0;



for (let i=0 ; i < arr.length; i++){

   
    
    if (arr[i].category == "Electronics"){
        eValue = eValue + arr[i].price * arr[i].qty;
    }
    else if(arr[i].category == "Furniture"){
        fValue = fValue + arr[i].price * arr[i].qty;
    }
    else{
        kValue = kValue + arr[i].price * arr[i].qty;
    }
    
}
 //let current = arr[i].price * arr[i].qty
    
   // if (current > max){
       // mEX = arr[i].name;
       // max = current
  //  }

const top3 = [...arr].sort((a, b) => b.price - a.price).slice(0, 3);

console.log("Electronic value:", eValue);
console.log("Furniture value:", fValue);
console.log("Kitchen value:", kValue);
console.log("Most expensive items:", top3);