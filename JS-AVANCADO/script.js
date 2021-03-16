// Titles
var h1 = document.querySelector("titles")

//h1.style.fontFamily = "Arial"
//h1.style.color = "red"

// tarefas
// arrow function
function dobro(x) {
    console.log(2 * x)
}

dobro(2)

let multi = function (x) {
    console.log(x * x)
}

multi(3);

let multi2 = function (x) {
    return x * x
}

console.log(multi2(3));

let multi3 = x => x * x;

console.log(multi3(6))

// callback

let usuarios = ["Claudio", "Gabriel", "Thiagos"];


function usuario(nome, callback) {

    setTimeout(() => {
        usuarios.push(nome);
        callback()
    }, 1000);

};

function listarUsuarios() {
    console.log(usuarios)
}

usuario("Junior", listarUsuarios);

// Promisses

let usuarios2 = ["Claudio", "Gabriel", "Thiago"];


function usuario2(nome1, nome2) {

    let promise = new Promise(function (resolve, reject) {

        setTimeout(() => {
            usuarios2.push(nome1, nome2);

            let error = false;

            if(!error){
                resolve();
            }else{
                reject({msg: "Erro de Qualquer"});
            }
        }, 1000);

    })

    return promise;
};

function listarUsuarios2() {
    console.log(usuarios2)
}

//async await
async function executar(){
    await usuario2("Debora", "Junior")
    listarUsuarios2();
}

executar();

//Filter

function novoAluno(nome, idade){
    return {nome, idade}
};

let alunos = [
    novoAluno("Gabriel", 23),
    novoAluno("Bianca", 21),
    novoAluno("Euclides", 42),
    novoAluno("Claudio", 46)
];

function mais30(aluno){
    return aluno.idade > 30
}

function menos30(aluno){
    return aluno.idade < 30
}

console.log(alunos.filter(mais30));
console.log(alunos.filter(menos30));

function novoFilme(nome, genero){
    return {nome, genero}
}

let filmes = [
    novoFilme("Homem de Ferro", "Ação"),
    novoFilme("A procura da Felicidade", "Drama"),
    novoFilme("007", "Ação"),
    novoFilme("Qualquer", "Drama")
]

function generoDrama(filme){
    return filme.genero == "Drama"
}
function generoAcao(filme){
    return filme.genero == "Ação"
}

console.log(filmes.filter(generoDrama))
console.log(filmes.filter(generoAcao))