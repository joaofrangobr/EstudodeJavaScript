function CalcIMC(peso, altura) {
    console.log((peso / (altura*altura)).toFixed(2));
}
CalcIMC(28.8, 1.32); // Aqui estamos chamando a função "CalcIMC" e passando os valores 70 (peso) e 1.75 (altura) como argumentos. A função irá calcular o Índice de Massa Corporal (IMC) usando a fórmula peso dividido pela altura ao quadrado, e imprimir o resultado no console.