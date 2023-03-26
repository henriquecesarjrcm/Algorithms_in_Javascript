// Identification of palindromes

// Catching the word

const palindrome = prompt("Digite uma palavra para verificar se ela é um palíndromo");

// Creating an empty string to store the result

let invertedWord = "";

// Running

for(let i = palindrome.length - 1; i >= 0; i--){
    invertedWord += palindrome[i];
}

if (palindrome === invertedWord){
    alert(palindrome + " é um palíndromo\n\n" + palindrome + " === " +invertedWord);
}else{
    alert(palindrome + " não é um palíndromo\n\n" + palindrome + " !== " + invertedWord);
}