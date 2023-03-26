// CARD GAME

// Getting Informations

const attackCharacter = prompt("Digite o nome do personagem de ataque: ");
const attackPower = parseInt(prompt("Digite aqui o poder de ataque do personagem: "));

const defenseCharacter = prompt("Digite o nome do personagem de defesa: ");
const defensePower = prompt("Digite o poder de defesa desse personagem: ");
let healthPoints = parseInt(prompt("Quantos pontos de vida tem o defensor: "));
const shield = prompt("O personagem possui escudo (SIM/NÃO): ");

// We start with the variable "damageDone" with a value of zero, so that we can change it and thus manage to decrease the value from the variable "healthPoints" to show the hit points after the attack

let damageDone = 0;

// Conditions and comparisons

if (attackPower > defensePower && shield === "nao") {
    damageDone = attackPower - defensePower;
    healthPoints -= damageDone;
} else if (attackPower > defensePower && shield === "sim") {
    damageDone = (attackPower - defensePower) / 2;
    healthPoints -= damageDone;
} else if (attackPower <= defensePower) {
    damageDone = 0;
}

// Showing the results

alert(
    "RESULTADO DA RODADA\n" +
    "\nPERSONAGEM DE ATAQUE: " + attackCharacter +
    "\nPONTOS DE ATAQUE: " + attackPower +
    "\nPERSONAGEM DE DEFESA: " + defenseCharacter +
    "\nPONTOS DE DEFESA: " + defensePower +
    "\nDANO CAUSADO: " + damageDone +
    "\nPONTOS DE VIDA DO DEFENSOR APÓS ATQ: " + healthPoints
);