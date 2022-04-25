function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}

function CriarBotaoDelete(){                                // Criação do botão de deletar
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Delete"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}

function CriarBotaoEdit(){                                   // Criação do botão de editar 
    const botao_edit =  document.createElement('button')
    botao_edit.classList.add("btn", "btn-success")
    botao_edit.innerHTML = "Edit"
    botao_edit.type = "button"
    botao_edit.addEventListener("click", EditItem);

    return botao_edit
} 
function EditItem(){
    const novo_item_lista = document.createElement('input');
    const FatherElement = this.parentElement
    FatherElement.innerHTML = '';
    FatherElement.appendChild(novo_item_lista)
    FatherElement.appendChild(CriarBotaoEdit())
    FatherElement.appendChild(CriarBotaoSalvar())                // Para salvar o que foi editado 
}


function CriarBotaoSalvar(){                                      //Criação do botão de salvar 
    const botao_salvar =  document.createElement('button')
    botao_salvar.classList.add("btn", "btn-secondary")
    botao_salvar.innerHTML = "Salvar"
    botao_salvar.type = "button"
    botao_salvar.addEventListener("click", SalvarItem);

    return botao_salvar
} 
function SalvarItem(){
    const input = this.parentElement.children[0] 
    lista = this.parentElement
    this.parentElement.innerHTML = input.value
    lista.appendChild(CriarBotaoDelete())
    lista.appendChild(CriarBotaoEdit())   
}


function Submit(){
    const valor = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-task]')

    const novo_item_lista = document.createElement("li")  //criando elemento 
    novo_item_lista.className = "list-group-item"

    novo_item_lista.innerHTML = valor.value  // //innerHTML - dentro html
 
    novo_item_lista.appendChild(CriarBotaoDelete())   // Insere botão delete
    novo_item_lista.appendChild(CriarBotaoEdit())     // Insere botão edit 
    lista.appendChild (novo_item_lista)

    document.getElementById("item").value = ""
}