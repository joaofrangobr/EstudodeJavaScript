let cars = {
    itemName: "monza",
    price: 15.000,
    color: "Black",
    available: true
} // Aqui temos um objeto literal, onde temos uma coleção de chaves e valores. O nome do objeto é "cars" e ele tem as seguintes propriedades: itemName, price, color e available.

console.table(cars);

cars.color = "Red"; // Aqui estamos alterando a propriedade "color" do objeto "cars" para "Red".

console.table(cars);