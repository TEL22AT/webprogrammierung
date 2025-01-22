// You can instantiate Map type objects

let user = {
  name: "Tobias",
  height: { value: 183, unit: "cm" },
};

// You can construct objects from a variable

let name = "Tobias";

personObject = { name: name };

// or just

personObject2 = { name };

// await means - wait for this to complete
// As slow things happen in separate thread

async function x() {
  a = await somethingSlow();
}

console.log(personObject);
console.log(personObject2);
