// PROPERTY REGISTRATION

// Creating an empty array to store the property object, a variable to count the number of registered properties and a variable for the user to choose the option

let registeredProperties = [];
let counter = 0;
let option = "";

// Showing the menu and executing the option chosen by the user

do{
    option = prompt("Seja Bem-vindo(a) Ao programa de cadastramento de Imóveis!\n" + 
    "Quantidade Imóveis cadastrados: " + counter +
    "\nQual ação deseja fazer? \n" + 
    "\n1 -> Cadastrar um novo imóvel\n" + 
    "2 -> Mostrar todos os imóveis salvos\n" +
    "3 -> Encerrar programa");

    switch(option){
        case "1":

            // Creating an object and its categories

            const property = {};

            property.owner = prompt("Digite o Nome do proprietário");
            property.rooms = prompt("Digite o numero de quartos do imóvel");
            property.bathrooms = prompt("Digite o numero de banheiros do imóvel");
            property.garage = prompt("Tem garagem no imóvel: (Sim/Não)");

            const confirmation = confirm(
                "salvar este Imóvel?\n" +
                "\nProprietario: " + property.owner +
                "\nQuartos: " + property.rooms +
                "\nBanheiros: " + property.bathrooms +
                "\nPossui Garagem: " + property.garage
            );

            // Inserting the object into the array if the confirmation is true

            if(confirmation) {
                registeredProperties.push(property);
                counter++;
            }

            break;
        case "2":

            // Showing all registered properties

            for(let i = 0; i < registeredProperties.length; i++){
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + registeredProperties[i].owner +
                    "\nQuartos: " + registeredProperties[i].rooms +
                    "\nBanheiros: " + registeredProperties[i].bathrooms + 
                    "\nGaragem: " + registeredProperties[i].garage
                );
            } 
            break;
        case "3":
            alert("Encerrando o programa...");
            break;
        default:
            alert("Opção Inválida! Tente Novamente");
            break;
    }

}while(option !== "3");
