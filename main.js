// Lightning Exercise 1: 
// Create an object that represents a bill from your doctor's office. 
// It should have the following properties: 
// officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. 
// You provide example values for each one.

// Lightning Exercise 2: 
// Copy the code below and paste it above your object.

const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";


const doctorBill = {
    officeName: "Office of Doctor Doom",
    streetAddress: "123 Main Street",
    doctorName: "Dr. Doom", 
    patientName: "Ernest Finklestein", 
    visitDate: "2/1/2020",
    amountBilled: 1000 , 
    dueDate: "2/10/2020", 
}

console.log(`Date Visited: ${doctorBill[dateVisited]}`);
console.log(`Amount Owed: ${doctorBill[owed]}`);
console.log(`Patient Name: ${doctorBill[patient]}`);

// Lightning Exercise 3: 
// Use Object.values() to output all the property values 
// to the console in Chrome.

console.log(Object.values(doctorBill));

// Lightning Exercise 1: 
// Output all of the key names from your doctor's office 
// bill to the console in Chrome.

for (const key of Object.keys(doctorBill)){
    console.log(`${key}`)
}

// Lightning Exercise 2: 
// Output all of the key names from your doctor's office 
// bill to the DOM inside a parent <section> element. 
// Wrap each one in a <span> element.
for (const key of Object.keys(doctorBill)){
    const container = document.getElementById("officeBill__container");
    container.innerHTML += `<br><span>${key}</span>`
}

/* 
Lightning Exercise 1: 
Create an object to represent your favorite dinner item 
(e.g. meatloaf, spaghetti, fried fish, gumbo). 

Each object should have a name property, 
but you can add any other properties that you like, 
such as size, weight, ethnicity, vegetarian boolean.
 */

const favoriteDinner = {
    name: "Three Cheese Baked Mac & Cheese",
    vegan: false,
    vegetarian: true
}


/* 
Lightning Exercise 2: 
Output all of the key/value pairs into the DOM 
inside an <article> element with a class of food.
*/

const foodContainer = document.querySelector(".food")
foodContainer.innerHTML = "<h1>Favorite Food</h1>"
// STOPPED HERE
for (const entry of Object.entries(favoriteDinner)) {
    foodContainer.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
}