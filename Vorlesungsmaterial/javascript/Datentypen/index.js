function generatePhrase(firstName) {
    randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber % 2 === 0) {
        return firstName + " ist ein Depp!";
    } else {
        return firstName + " ist ein Genie!";
    }
}

let nameList = ["Daniel", "Max", "Lukas", "Lena", "Anna", "Lisa", "Julia", "Lara"];

// classic for loop with index
for (let i = 0; i < nameList.length; i++) {
    console.log(generatePhrase(nameList[i]));
}

// for loop with of to iterate over iterable elements like arrays, strings, maps, sets
for (let name of nameList) {
    console.log(generatePhrase(name));
}

// forEach loop with arrow function
nameList.forEach(name => console.log(generatePhrase(name)));

nameList.forEach(function(name) {
    console.log(generatePhrase(name));
});

console.log(2 == "2");
console.log(2 === "2");
console.log(2 === 2);