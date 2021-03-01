
function fazGet(url){
    let request= new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText   
}
function album(){
function criarLinha(usuario){
 
 let linha = document.createElement("tr")  
 let tdId = document.createElement("td")
 let tdNome = document.createElement("td")
 let tdTitulo= document.createElement("td")
 let tdCorpo= document.createElement("td")
 let tdCompleto=document.createElement("td")
 
 tdId.innerHTML= usuario.userId
 tdNome.innerHTML= usuario.id
 tdTitulo.innerHTML=usuario.title
 tdCompleto.innerHTML=usuario.completed
 linha.appendChild(tdId)
 linha.appendChild(tdNome)
 linha.appendChild(tdTitulo)
 linha.appendChild(tdCompleto)
 
 return linha
}
function main(){
    let data = fazGet("https://jsonplaceholder.typicode.com/todos/")
    let usuarios= JSON.parse(data)
    let tabela= document.getElementById("tabela")
    usuarios.forEach(element => {
        let linha=criarLinha(element);
        tabela.appendChild(linha)
        console.log(usuarios)
    });
}   
main()
}
album() 
