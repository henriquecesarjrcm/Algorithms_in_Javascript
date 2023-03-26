// HOSPITAL QUEUE

// Creating an empty array to store the patients' names and a variable for choosing the option

let patients = [];
let option = "";

// Showing the menu and executing the option chosen by the user

do{
    option = prompt("O que você deseja fazer? \n" + 
    "pacientes na fila: " + patients +
    "\nOpções: \n" + 
    "1 -> Novo Paciente\n" + 
    "2 -> Consultar Paciente\n" +
    "3 -> Encerrar ");

    switch(option){
        case '1':
            patients.push(prompt("Digite o nome do Novo Paciente"));
            break;
        case '2':
            consultedPatient = patients.shift();
            if (consultedPatient){
                alert(consultedPatient + " Foi removido da fila");
            }else{
                alert("Todos os pacientes ja foram atendidos");
            }
            break;
        case '3':
            alert("Encerrando programa...");
            break;
        default:
            alert("Opção Inválida! Tente Novamente");
    }

}while(option !== '3');