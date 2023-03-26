// MULTIPLICATION TABLE

// Getting the input number by the user

let number = parseInt(prompt("Digite um numero para ver sua tabuada até o 20"));

// Creating an empty string to concatenate the results

let results = "";

// Running

for(let i = 1; i <= 20; i++){
    results += i + " * " + number + " = " + (i * number) + "\n";
}

// Showing the results

alert(results);