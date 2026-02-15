/* Se o aluno tirar uma nota maior que 7 ele estará aprovado
Se o aluno tirar uma nota entre 5 e 6 está em recuoeração
Se o aluno tirar uma nota menor que 4 ele estará reprovado */

const nota = 4;
if (nota > 7) {
    console.log("Aprovado");
 } else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
