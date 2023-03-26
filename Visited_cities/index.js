// STORING AND COUNTING THE CITIES VISITED BY A TOURIST

// Getting informations

const tourist = prompt("Digite o nome do turista: ");

// Creating an empty string to concatenate the results

let cities = "";

// Creating a counter to increment the results

let counter = 0;

// Running

let visited = prompt("Você visitou alguma cidade? (Sim/Não)");

while (visited === "Sim" || visited === "sim") {
    let city = prompt("Digite o nome da cidade visitada: ");
    cities += " - " + city + "\n";
    counter++;
    visited = prompt("Você visitou mais alguma cidade? (Sim/Não)");
}

// Showing the results

alert(
    "Turista: " + tourist +
    "\nQuantidade de cidades visitadas: " + counter +
    "\nCidades visitadas: \n" + cities
);