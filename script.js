function criarTarefa(){

   let valorImput = document.getElementById('escrever').value
   
   let li = document.createElement('li')
                   /*Cria elementos  createElement*/

   li.innerHTML = 
   
   '<div class = "tarefas_icones">' + 
   '<input type="checkbox" class = "caixa_personalizada" >' + 
    valorImput + '</div>' +
   '<div class = "deletar">' + 
   '<span onclick ="deletarTarefa(this)">' + '<i class="fa-solid fa-trash"></i> </span>' + 
   '</div>' 
   
/*Coloca o valor dentro da li innerHTML*/

   document.querySelector('ul').appendChild(li)
                        /* Cria um filho para a ul appendChild */

   document.getElementById('escrever').value = ""
} 

function deletarTarefa(Element){
    Element.closest("li").remove()
}

function mudarFundo(){
    document.body.classList.toggle('dark')
}

console.log(deletarTarefa)