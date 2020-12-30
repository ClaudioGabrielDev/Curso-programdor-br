/* var a = 10
var b = 20
var c = "30"

primeiro = "Claudio"
segundo = " Gabriel"
terceiro = " da Costa"

quarto = null

console.log(a + b)
console.log(c)
console.log(primeiro + segundo + terceiro)
console.log(quarto) 

a = 30

a %= 28;

console.log(a) 

var a = 2
var b = 3

console.log(a < b) 

a = true
b = false

var c = a && b

console.log(c)

idade = 20

maior20 = idade >= 20
menor30 = idade <= 30

entre = maior20 && menor30

console.log("maior que vinte", maior20)
console.log("menor que trinta", menor30)
console.log("entre 20 e 30", entre) 

idade = 68

menor10 = idade <= 10;
maior65 = idade >= 65;

gratuidade = menor10 || maior65;

console.log("Menor que 10?", menor10)
console.log("Maior que 65?", maior65)

console.log("Tem gratuidade?", gratuidade) 

idade = 17

if (idade < 16) {
    console.log(idade, "Não vota")
} else if ( idade <= 17 || idade > 65){
    console.log(idade, "Voto Opcional")
} else if (idade >= 18 || idade <= 65){
    console.log(idade, "Obrigatório votar")
} 

idade = 5

for (vez = 0; vez < idade; vez++){
    console.log(vez)
}
console.log("Acabou")


idade = Math.random();

while (idade <= 90){
    console.log(idade)
    idade = Math.random() * 100;
}
console.log(idade)
console.log("Acabou")

// Função

function media(n1, n2){
    nota1 = n1;
    nota2 = n2

    var media = (nota1 + nota2) / 2; 
    
    return media;
}

resultado1 = media(2, 5);
resultado2 = media (8, 9);

console.log(resultado1);
if (resultado1 < 6){
    console.log("Reprovado");
} else {
    console.log("Aprovado");
}
console.log(resultado2);
if (resultado2 < 6){
    console.log("Reprovado");
} else {
    console.log("Aprovado");
}

//   Funcão 2

media = (n1, n2) => {
    return (n1 + n2) /2
}

console.log(media(9, 8));

// ENTENDIIII A ARROW FANCTION!!! 

// CRIANDO SISTEMA DA ESCOLA  

var alunos = ["Gabriel", "Bianca", "Odineth"];

var notasA = [7.4, 8.0, 6.5];
var notasB = [9.5, 2.0, 5.0];

function media(n1, n2){
   return (n1 + n2) / 2
}

function passou(media){
    
    if (media < 7 ){
        return  "Reprovado"

    } else {
        return "Aprovado"
    }
}

for (aluno in alunos){

    var nota1 = notasA[aluno];
    var nota2 = notasB[aluno];

    var m = media(nota1, nota2);

    console.log(alunos[aluno] + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passou(m));
} 

// OBJETOS

var calcMedia = function(){
    return (this.nota1 + this.nota2) / 2;
}

var alunos = [
    {nome: "Gabriel",
     nota1: 9,
     nota2: 6,
     media: calcMedia,
    }
];

var aluno = alunos[0];

console.log(aluno);
console.log(aluno.media()); 

var calMedia = function() {
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno = {
    nome: "Gabriel",
    notas: [5, 9],

    media: calMedia
}

var aluno2 = {
    nome: "Bianca",
    notas: [9, 9],

    media: calMedia
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno2.nome);
console.log(aluno2.media()); 


// OBJETOS CONSTRUTORES

function creatNewAluno (name, n1, n2){
    return {
        nome: name,
        nota1: n1,
        nota2: n2,
        media: function() {
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var turma = [
    creatNewAluno("Gabriel", 9, 9.5),
    creatNewAluno("Bianca", 6, 9.5)
]

var aluno = turma[0];

for ( var aluno of turma){
    var alunos = console.log(aluno.nome + " - " + aluno.media());
} 

function aluno( nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function(){
       return (this.nota1 + this.nota2) / 2;
    }
}

var a = new aluno("Gabriel", 9, 7);
var b = new aluno("Bianca", 4, 5);
var c = new aluno("Odineth", 10, 10);

console.log(a.nome)
console.log(a.media());

console.log(b.nome)
console.log(b.media());

console.log(c.nome);
console.log(c.media()); 

//exercicio 1

function maior(n1, n2){
    var um = n1;
    var dois = n2;

    if( um > dois){
        console.log(um + " É maior que " + dois);
    } else {
        console.log(dois + " É maior que " + um);
    }
} 

//execicio 2 

function ordenarLista(lista){
    var listaOrdenada = lista.sort((a,b)=>a-b)

    for (let num of listaOrdenada) {
        console.log(num)
    }
}

ordenarLista([9,25,4])



// Exercicio 3

function maiorNum(lista){
    var maior = lista[0]
    for (let num of lista) {
       maior = maiorEntreDois(num,maior)
    }
    return maior
}

​console.log(maiorNum([9,25,3,20,18])) 

// Exercicio 4

function media(lista){
    var total = 0;

    for (let num of lista){
        
        total += num;
        
    }

    var mediaExata = total / lista.length

    return console.log("A media dos numeros " + lista + " é " + mediaExata)
}

console.log(media([1,3,5,7,88])) 

//Exercicio 5

function par(n1){
    if (n1%2 == 0){
        console.log("Par")
    }else{
        console.log("Impar")
    }
}

console.log(par(23)) 

//Exercicio 6

function multiplosDe4(){
    for (let index = 0; index <= 100; index++){
        if(index % 4 == 0){
            console.log("pi")
        } else{
            console.log(index)
        }
    }
}

multiplosDe4() 

// Exercicio 7

function obj(objects){
    for( let object in objects){
        console.log(object)
    }
}

var pessoa = {nome: "José", idade:35, altura: 1.80}

obj(pessoa) 

// Exercicio 8

function data(d){
    var meses = ['Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro']
   return {
        dia:d.getDate(),
        mes: meses[d.getMonth()],
        ano: d.getFullYear()
    }
}

console.log(data(new Date(Date.now()))) 

//EX 9

function maiorAltura(lista){
    var totalAltura = 0;
    var idade = 0

    for(altura of lista){
        totalAltura += altura
    }
} */

//EX 10

function escada(altura){
    for(let i = 1; i <= altura; i++){
        let string = ""
        for(let j =1 ;j<= i; j++){
            string +="* "
        }
        console.log(string)
    }
}

escada(5)