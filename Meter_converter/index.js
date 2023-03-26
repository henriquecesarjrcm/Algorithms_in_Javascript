// METER CONVERTER TO OTHER MEASUREMENTS

// Getting Informations

// Which unit of media the user wants to convert to

const conversion = parseInt(prompt("Para qual unidade de medida você deseja converter: \n1 -> Milímetro \n2 -> Centímetro \n3 -> Decímetro \n4 -> Decâmetro \n5 -> Hectômetro \n6 -> Quilômetro: "));

// The amount of meters that the user will convert

let measure = parseFloat(prompt("Digite o valor da medida em metros: "));

// Conversions

let mm = measure * 1000;
let cm = measure * 100;
let dc = measure * 10;
let dam = measure / 10;
let hm = measure / 100;
let km = measure / 1000;

// Showing the results

switch (conversion) {
    case 1:
        alert("O valor " + measure + " em metro(s) é equivalente a " + mm + " em milímetros");
        break;
    case 2:
        alert("O valor " + measure + " em metro(s) é equivalente a " + cm + " em centímetros");
        break;
    case 3:
        alert("O valor " + measure + " em metro(s) é equivalente a " + dc + " em decímetros");
        break;
    case 4:
        alert("O valor " + measure + " em metro(s) é equivalente a " + dam + " em decâmetros");
        break;
    case 5:
        alert("O valor " + measure + " em metro(s) é equivalente a " + hm + " em hectômetros");
        break;
    case 6:
        alert("O valor " + measure + " em metro(s) é equivalente a " + km + " em quilômetros");
        break;
    default:
        alert("Opção Inválida! Tente Novamente escolhendo a opção de 1 até 6");
}