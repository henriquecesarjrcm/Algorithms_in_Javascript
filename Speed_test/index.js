// RECRUITS REGISTRATION

// Getting Informations

const firstName = prompt("Digite seu primeiro nome: ");
const surname = prompt("Digite seu sobrenome: ");
const fieldOfStudy = prompt("Digite seu campo de estudo: ");
const yearOfBirth = parseInt(prompt("Digite seu ano de nascimento: "));

//Showing Informations

alert(
    "RECRUTA CADASTRADO COM SUCESSO!\n" +
    "\nNome Completo: " + firstName + " " + surname +
    "\nCampo de Estudo: " + fieldOfStudy +
    "\nIdade: " + (2023 - yearOfBirth)
);