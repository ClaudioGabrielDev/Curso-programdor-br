//document.body.innerHTML = "<h1>Isto foi inserido atravez do JS</h1>" + document.body.innerHTML;

/* var p = document.getElementsByClassName("paragrafo");

for( let ps of p){
    console.log(ps)
}

console.log(p) 

var tt = document.getElementById("title")

console.log(tt)

tt.style.color = "blue"
tt.style.fontWeight = 800
tt.style.fontFamily = "Roboto"


tt.setAttribute("meuAtt", "Qualquer coisa")

tt.className = "tagTitle" 

        
    // MANIPULANDO O DOM PT 1/3

function novoh1(i) {
    
    h2 = document.getElementsByTagName("h2")[0]

    h2.innerText = i.value;
    
    
}

function hideTittle(){
    h1 = document.getElementsByTagName("h1")[0];

    h1.style.display = "none"
}

    // MANIPULANDO O DOM PT 2/3

function Over(elemento){
    elemento.style.backgroundColor = "red";
}

function Out(elementoOut){
    elementoOut.style.backgroundColor = "rgb(60, 60, 185)";

}
function hidenTop(){
    let topo = document.getElementsByTagName('img')[0];
    let textButton = document.getElementById('bt')

    if (topo.style.display == "none"){
        textButton.innerText = "Click"
        topo.style.display = "block"
        
    } else {
        textButton.innerText = "Mostrar"
        topo.style.display = "none"


    }
}

        // MANIPULANDO O DOM PT 3/3

let bt2 = document.getElementById('bt2')

bt2.addEventListener("click", mudarCor);

function mudarCor(){
    this.style.backgroundColor = 'red';

    let topo = document.getElementsByTagName('img')[0];

    if (topo.style.display == "none"){
        this.innerText = "Mesma coisa"
        this.style.backgroundColor = 'rgb(60, 60, 185)';
        topo.style.display = "block"
        
    } else {
        this.innerText = "Mostrar"
        topo.style.display = "none"


    }
}

        //COMEÇANDO A ENTEDER O JSON

let aluno = {
    nome: "Gabriel",
    nota: 9
}

let aluno1 = JSON.stringify(aluno);

let aluno2 = '{"nome": "Bianca", "nota": 9.0}'
let aluno22 = JSON.parse(aluno2);

console.log(aluno)
console.log(aluno1)

console.log(aluno2)
console.log(aluno22);*/

//          RELEMBRANDO
/* function creatObject(nome, nota){
    let aluno = {
        name: nome,
        notas: nota
    }

    return aluno
}

var alu = creatObject("Gabriel", 7.5)

console.log(alu) */

//      ENTENDENDO O LOCALSTORAGE

/* onload = function(){
    let carregado = localStorage.getItem("nome");
    let h1 = document.getElementById("title");
    
    h1.innerHTML = carregado
    }

function novoh1(element){
    let valor = element.value;
    console.log(valor);

    let h1 = document.getElementById("title");
    if (valor == ""){
        h1.innerHTML = "Escreva Algo"
    }else {
        h1.innerHTML = valor
    }

    localStorage.setItem("nome", valor)
    
} 

            //HTML INTERMEDIARIO

let image = document.getElementById("img");

image.addEventListener("click", function(){
    image.setAttribute("src", "../img/deslike.png")
})

let lista = document.getElementById("lista")
let num = lista.getAttribute("num");

let conteudo = ""

for (i = 1; i <= num; i++){
    conteudo += "<li>" + i + "</li>"
}

lista.innerHTML = conteudo

let lista2 = document.getElementById("lista2");
lista2.dataset.n = 5
let n = lista2.dataset.n;



let conteudo2 = ""

for (i = 1; i <= n; i++){
    conteudo2 += "<li>" + i + "</li>"
}

lista2.innerHTML = conteudo2 */

        // tag VIDEO

/* let video = document.getElementById("video");
let controles = document.getElementById("controles")
console.log(controles)

video.addEventListener("mouseenter", mostrar)
video.addEventListener("mouseleave", esconder)

function mostrar(){
    controles.style.display = "block";
}
function esconder(){
    controles.style.display = "none";
}

function retroceder(){
    video.currentTime -= 15
}
function avancar(){
    video.currentTime += 15
}
function acelerar(){
    video.playbackRate += 0.1
}
function diminuir(){
    video.playbackRate -= 0.1
}
function play(){
    video.play();
}
function pause(){
    video.pause();
}
function stop(){
    video.pause();
    video.currentTime = 0;
} */

// CONHECENDO O CANVAS

let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(250, 250);
ctx.lineTo(500, 0);
ctx.lineWidth = 5;
ctx.stroke();
