// SIMPLE MONEY MOVEMENTS

//Getting user balance

let balance = parseFloat(prompt("Digite o seu saldo inicial: "));

// Showing the menu and executing the option chosen by the user

do {
    operation = parseInt(prompt("\nSeu Saldo = " + balance +
    "\n\nSelecione a operação que deseja fazer: \n"+
    "\n1 -> Adicionar dinheiro" +
    "\n2 -> Retirar dinheiro" +
    "\n3 -> Encerrar Programa"));

    switch(operation) {
        case 1:
            let deposit = parseFloat(prompt("Qual o valor que você deseja depositar: "));
            balance += deposit;
            break;
        case 2:
            let withdraw = parseFloat(prompt("Qual o valor que você deseja sacar: "));
            if (withdraw > balance) {
                alert(
                    "Saldo Insuficiente!" +
                    "\nSeu saldo atual: " + balance
                );
            } else {
                balance -= withdraw;
            }
            break
        case 3:
            alert("Encerrando o programa...");
            break;
    }


} while (operation !== 3);