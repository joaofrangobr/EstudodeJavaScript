const person  = {
    name: "João",
    lastName: "Zucon",
    age: 17,
    city: "Paraná"
}
for (let pers in person) {
    console.log(person[pers]);
} // for in é utilizado para percorrer as propriedades de um objeto, ou seja, as chaves do objeto.