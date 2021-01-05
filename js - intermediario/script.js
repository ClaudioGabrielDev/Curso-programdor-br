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
}*/

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

