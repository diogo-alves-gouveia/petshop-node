// Manter importações sempre no topo:

const http = require("http");
const url = require("url");
const petshop = require("./petshop");

// console.log(http);


//Criação do servidor:

// http.createServer((req, res) => {
//     console.log("Estou em um servidor!");
// }).listen(3000, "localhost");


//Forma mais semânica de escrever a criação do servidor:

// let server =  http.createServer((req, res) => {
//         console.log("Estou em um servidor!");
// });

// server.listen(3000, "localhost");


//Criação do servidor e envio de resposta na tela (com funcionalidades do módulo url para que ao editarmos a url no browser ele adicione o nome em nossa lista):

let server = http.createServer((req, res) => {
    
    let urlCompleta = url.parse(req.url, true)
    console.log(urlCompleta) 

    if(urlCompleta.pathname == "/") {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write("Você está na página inicial");
        res.end();
    }
    
    if(urlCompleta.pathname == "/home") {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write("Você está no sistema Petshop!");
        res.end();
    }

    if(urlCompleta.pathname == "/pet/adicionar") {

        if(petshop.adicionarPet(urlCompleta.query.nome)){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write("O Pet foi cadastrado com sucesso!");
            res.end();
        }else {
            res.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'});
            res.write("Erro ao cadastrar o Pet!");
            res.end();
        }
    }
}); 

server.listen(3000, "localhost");


//Função 1 - listar os pets no sistema: nova rota pet listar que vai mostrar todos os pets cadastrados lá na tela do usuário;

//Função 2 - Buscar pet pelo nome usando querry string;
