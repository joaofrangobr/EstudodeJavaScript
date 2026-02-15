let number = 2; // aqui temos a variável "number" que recebe o valor 2, e é esse valor que será avaliado no switch
// O código acima é um exemplo de uma estrutura de controle de fluxo chamada "switch". Ele avalia o valor da variável "number" e executa o bloco de código correspondente ao caso que corresponde a esse valor. Se "number" for igual a 1, ele imprimirá "Esse é o número 1". Se for igual a 2, ele imprimirá "Esse é o número 2". Se for igual a 3, ele imprimirá "Esse é o número 3". Se "number" não corresponder a nenhum dos casos especificados, ele executará o bloco de código do "default", que imprimirá "Não entrou em nenhuma condição". O uso do "break" é importante para evitar que o código continue executando os casos seguintes após encontrar uma correspondência.
switch (number) {
    case 1:
        console.log("Esse é o número 1");
        break;
        case 2:
        console.log("Esse é o número 2");
        break;
        case 3:
        console.log("Esse é o número 3");
        break;
        default:
        console.log("Não entrou em nenhuma condição");
        break;
}