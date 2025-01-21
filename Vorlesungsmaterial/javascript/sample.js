// console.log("Hello World");
// document.body.innerHTML = "Hello World";

let firstName = "Tobias";
let lastName = "Joschko";

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

getFullNameArrow = (firstName, lastName) => firstName + " " + lastName;

getFullNameArrow2 = (firstName, lastName) => {
  return firstName + " " + lastName;
};

let fullName = getFullNameArrow2(firstName, lastName);

console.log('getFullName: ' + getFullName(firstName, lastName));
console.log(`getFullName: ${getFullNameArrow(firstName, lastName)}`);
console.log('getFullNameArrow2 ' + fullName);
