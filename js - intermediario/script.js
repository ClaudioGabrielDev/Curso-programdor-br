//document.body.innerHTML = "<h1>Isto foi inserido atravez do JS</h1>" + document.body.innerHTML;

/* var p = document.getElementsByClassName("paragrafo");

for( let ps of p){
    console.log(ps)
}

console.log(p) */

var tt = document.getElementById("title")

console.log(tt)

tt.style.color = "blue"
tt.style.fontWeight = 800
tt.style.fontFamily = "Roboto"


tt.setAttribute("meuAtt", "Qualquer coisa")

tt.className = "tagTitle"

