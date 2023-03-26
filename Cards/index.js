// STACK OF CARDS

// Creating an array already filled with some cards and a variable to choose the menu option

let cards = ["2 de Copas", " 3 de Espadas", " Rei de Ouros", " 9 de Paus"];
let option = "";

// Showing the menu and executing the option chosen by the user

do{
    option = prompt("Cartas disponíveis -> " + cards +
    "\nOpções:  \n" + 
    "\n1 -> Adicionar uma carta\n" + 
    "2 -> Puxar uma carta\n" +
    "3 -> Sair");

    switch(option){
        case '1':
            let cartaAdicionada = prompt("Digite qual carta vai ser colocada: ");
            cards.unshift(cartaAdicionada);
            break;
        case '2':
            let cartaRetirada = cards.shift();
            if(!cartaRetirada){
                alert("Todas as cartas do baralho foram retiradas");
            }else{
                alert(cartaRetirada + " Foi removida do baralho");
            }
            break;
        case '3':
            alert("Encerrando o programa...");
            break;
        default:
            alert("Opção Inválida! Tente Novamente");
            break;
    }
}while(option !== '3');