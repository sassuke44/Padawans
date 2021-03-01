
function fazGet(url){
    let request= new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText   
}
function postagens(){
function criarLinha(usuario){
 let linha = document.createElement("tr")  
 let tdId = document.createElement("td")
 let tdNome = document.createElement("td")
 let tdTitulo= document.createElement("td")
 let tdCorpo= document.createElement("td")
  
 tdId.innerHTML= usuario.userId
 tdNome.innerHTML= usuario.id
 tdTitulo.innerHTML=usuario.title
 tdCorpo.innerHTML=usuario.body
 linha.appendChild(tdId)
 linha.appendChild(tdNome)
 linha.appendChild(tdTitulo)
 linha.appendChild(tdCorpo)
 return linha
}
function main(){
    
    let data = fazGet("https://jsonplaceholder.typicode.com/posts/")
    let usuarios= JSON.parse(data)
    let tabela= document.getElementById("tabela")
    usuarios.forEach(element => {
        let linha=criarLinha(element);
        tabela.appendChild(linha)
    });
}   
main()

}
postagens() 
