// GEOMETRIC SHAPES AREA CALCULATOR

// Creating functions to perform the calculations

function triangleArea(){
    let triangleBase = parseFloat(prompt("Digite o tamanho da base do triângulo: "))
    let triangleHeight = parseFloat(prompt("Digite o tamanho da altura do triãngulo: "))
    return (triangleBase * triangleHeight) / 2
}

function rectangleArea(){
    let rectangleBase = parseFloat(prompt("Digite o tamanho da base do retângulo: "))
    let rectangleHeight = parseFloat(prompt("Digite o tamanho da altura do retângulo: "))
    return (rectangleBase * rectangleHeight)
}

function squareArea(){
    let sideOfSquare = parseFloat(prompt("Digite qual o tamanho do lado do quadrado: "))
    return (sideOfSquare * sideOfSquare)
}

function trapezeArea(){
    let biggerBase = parseFloat(prompt("Digite o tamanho da base maior do trapézio: "))
    let minorBase = parseFloat(prompt("Digite o tamanho da base menor do trapézio: "))
    let trapezeheight = parseFloat(prompt("Digite o tamanho da altura do trapézio: "))
    return (biggerBase + minorBase) * (trapezeheight / 2)
}

function circleArea(){
    let radius = parseFloat(prompt("Digite o tamanho do raio do círculo: "))
    return (radius * radius) * 3.14
}

function menu() {
    let option = ""

    do{

        option = prompt(
            "Calculadora Geométrica" +
            "\nDigite a opção desejada:" +
            "\n1 -> Área do triângulo" +
            "\n2 -> Área do retângulo" +
            "\n3 -> Área do quadrado" +
            "\n4 -> Área do trapézio" +
            "\n5 -> Área do círculo" +
            "\n6 -> Encerrar o programa"
        )

        switch(option){
            case "1":
                alert("A área do triângulo é de: " + triangleArea())
                break
            case "2":
                alert("A área do retângulo é de: " + rectangleArea())
                break
            case "3":
                alert("A área do quadrado é de: " + squareArea())
                break
            case "4":
                alert("A área do trapézio é de: " + trapezeArea())
                break
            case "5":
                alert("A área do círculo é de: " + circleArea())
                break
            case "6":
                alert("Encerrando o programa...")
                break
            default:
                alert("Opção Inválida! Tente Novamente")
                break
        }

    }while (option !== "6")
}

menu()