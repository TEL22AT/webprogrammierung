function generatePhrase(firstName) {
    randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber % 2 === 0) {
        return firstName + " ist ein Depp!";
    } else {
        return firstName + " ist ein Genie!";
    }
}

let nameList = ["Daniel", "Max", "Lukas", "Lena", "Anna", "Lisa", "Julia", "Lara"];
// for (let i = 0; i < nameList.length; i++) {
//     console.log(generatePhrase(nameList[i]));
// }

for (let name of nameList) {
    console.log(generatePhrase(name));
}

console.log(2 == "2");
console.log(2 === "2");
console.log(2 === 2);