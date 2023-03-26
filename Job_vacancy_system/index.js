// JOB VACANCY SYSTEM

// Creating an empty array to store about vacancies

let vacancies = [];

// Creating Functions

function menu() {
    let option = "";

    do {
        option = prompt(
            "Seja Bem-vindo(a) ao Sistema de Vagas de Empregos\n" +
            "\nSelecione abaixo a aopção desejada: " +
            "\n1 -> Lista vagas disponíveis" +
            "\n2 -> Criar uma nova vaga" +
            "\n3 -> Visualizar uma vaga" +
            "\n4 -> Inscrever um candidato em uma vaga" +
            "\n5 -> Excluir uma vaga" +
            "\n6 -> Encerrar programa"
        );

        switch (option) {
            case "1":
                listVacancies();
                break;
            case "2":
                createNewVacancy();
                break;
            case "3":
                viewVacancy();
                break;
            case "4":
                registerCandidate();
                break;
            case "5":
                deleteVacancy();
                break;
            case "6":
                alert("Encerrando programa...");
                break;
            default:
                alert("Opção Inválida! Tente Novamente");
                break;

        } 
    } while(option !== "6");
}

function listVacancies() {
    const vacancyInText = vacancies.reduce(function (allInformations, vacancy, index){
        allInformations += index + ". ";
        allInformations += vacancy.name;
        allInformations += " (" +vacancy.candidates.length + " candidatos)\n";
        return allInformations;
    }, "");

    alert(vacancyInText);
}

function createNewVacancy() {

    const name = prompt("Digite o nome da vaga: ");
    const description = prompt("Digite uma descrição para a vaga que está sendo criada: ");
    const deadLine = prompt("Digite a data limite para o encerramento da vaga: (dd/mm/aaaa)");

    let confirmation = confirm(
        "Deseja Salvar essa vaga?" +
        "\nNome: " + name +
        "\nDescrição: " + description +
        "Data limite: " + deadLine
    );

    if (confirmation) {
        const newVacancy = { name, description, deadLine, candidates: [] };
        vacancies.push(newVacancy);
        alert("Vaga criada.");
    }
}

function viewVacancy() {
    let index = prompt("Digite o índice da vaga que você quer visualizar: ");

    if (index >= vacancies.length || index < 0) {
        alert("Indice Inválido");
        return;
    }

    const vacancy = vacancies[index];

    const  allCandidates = vacancy.candidates.reduce((allInformations, candidate) => allInformations + "\n - " + candidate, "");

    alert(
        "Numero da vaga: " + index +
        "\nNome: " + vacancy.name + 
        "\nDescription: " + vacancy.description +
        "\nData limite: " + vacancy.deadLine +
        "\nQuantidade de candidatos: " + vacancy.candidates.length +
        "\nCandidatos Inscritos: " + allCandidates
    );
}

function registerCandidate() {
    const candidate = prompt("Digite o nome do candidato(a): ");
    const index = prompt("Informe o índice da vaga para qual ele irá concorrer: ");
    const vacancy = vacancies[index];

    const confirmation = confirm(
        "Deseja inscrever o candidato " + candidate + " Na vaga de índice: " + index + " ?" +
        "\nNome: " + vacancy.nome +
        "\nDescrição: " + vacancy.description +
        "\nData limite: " + vacancy.deadLine
    );

    if (confirmation) {
        vacancy.candidates.push(candidate)
        alert("Inscrição realizada");
    }
}

function deleteVacancy() {
    const index = prompt("Informe o índice da vaga que deseja excluir: ");
    const vacancy = vacancies[index];

    const confirmation = confirm(
        "Tem certeza que deseja excluir a vaga " + index +
        "\nNome: " + vacancy.nome +
        "\nDescrição: " + vacancy.description +
        "\nData limite: " + vacancy.deadLine
    );

    if (confirmation) {
        vacancies.splice(index, 1);
        alert("Vaga ecluída")
    }
}

function execute() {
    return menu();
}

execute();
