// Titles
var h1 = document.querySelector("titles")

h1.style.fontFamily = "Arial"
h1.style.color = "red"

// tarefas
// arrow function
function dobro(x){
    console.log(2 * x)
}

dobro(2)

let multi = function (x){
    console.log(x * x)
}

multi(3);

let multi2 = function(x){
    return x * x 
}

console.log(multi2(3));

let multi3 = x => x * x;

console.log(multi3(6))

// callback

let usuarios = ["Bianca", "Junior", "Thiago"]

function incluirUsuario(nome, callback){
    setTimeout(()=> {
        usuarios.push(nome);
        callback();
    }, 1000
    )
}

function listarUsuarios(){
    console.log(usuarios)
}

incluirUsuario("Gabriel", listarUsuarios)
