console.log("Hello World");
// document.body.innerHTML = "Hello World from JavaScript";

buttonClick = () => {
  document.body.style.backgroundColor = "red";
  // console.log(document.getElementById('firstP'))
  // document.getElementById('firstP').textContent = "Hello World from JavaScript buttonClick()";
  
  // load and check if the paragraph exists
  let paragraph = document.getElementById("firstP");
  if (paragraph) {
    paragraph.textContent = "Hello from JavaScript buttonClick()";
    paragraph.style.color = "blue";
  } else {
    console.error('Element with id "firstP" not found.');
  }
};

let firstName = "Tobias";
let lastName = "Joschko";

// different ways to define a function
// standard function
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// arrow function without block (implicit return)
getFullNameArrow = (firstName, lastName) => firstName + " " + lastName;

// arrow function with block (explicit return)
getFullNameArrow2 = (firstName, lastName) => {
  return firstName + " " + lastName;
};

let fullName = getFullNameArrow2(firstName, lastName);

console.log("getFullName: " + getFullName(firstName, lastName));
console.log(`getFullName: ${getFullNameArrow(firstName, lastName)}`);
console.log("getFullNameArrow2 " + fullName);


// object
let person = {
  firstName: "Tobias",
  lastName: "Joschko",
};

// JSON and object conversion
let personJSON = JSON.stringify(person); // convert object to JSON
console.log(personJSON); // print JSON
personObject = JSON.parse(personJSON); // convert JSON to object
console.log(personObject);  // print object
