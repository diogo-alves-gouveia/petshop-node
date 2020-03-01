// Criação de módulos de funcionalidades:

let listaDePets = [];

function adicionarPet(nomePet) {
    
listaDePets.push(nomePet);

console.log(listaDePets);

return true;

}

module.exports = {adicionarPet};