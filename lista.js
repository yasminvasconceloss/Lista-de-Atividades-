function Submit(){
    const valor = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-task]')

    console.log(valor.value)
    const novo_item_lista = document.createElement("li") //criando elemento 
    
    novo_item_lista.innerHTML = valor.value  //innerHTML - dentro html
    
    
    lista.appendChild (novo_item_lista)
    
}













// function myFunction(){
//     console.log("teste inicial");
// }

// function addItem(){
//     const inputItem = document.querySelector('[data-form-input]')
//     const valorItem = inputItem.value

//     const listaDeItems = document.querySelector('[data-task]')

//     novaLabel = document.createElement('label')
//     novaLabel.innerText = valorItem
    
//     novoItem = document.createElement('li')

//     // novoItem.appendChild(criarBotaoConcluir())
//     novoItem.appendChild(novaLabel)
//     // novoItem.appendChild(criarBotaoDelete())

//     listaDeItems.appendChild(novoItem)

//     inputItem.value = ""
//}
