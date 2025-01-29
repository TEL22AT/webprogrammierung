document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('#add-heading'); // Ensure the button has the correct ID
    let numberDisplay = document.querySelector('h1');
    let number = 0;
    numberDisplay.innerHTML = number;
    button.addEventListener('click', function () {
        number++;
        numberDisplay.innerHTML = number;
        numberDisplay.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        console.log(numberDisplay.style.color);
        if (number % 7 == 0) {
            alert("Du hast die Zahl " + number + " erreicht!");
        }   
    });
});

// Function to fetch Kanye West's citations
async function getData() {
    try {
        let response = await fetch('https://api.kanye.rest/');
        let data = await response.json();
        document.querySelector('#citation').innerText = data.quote;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}