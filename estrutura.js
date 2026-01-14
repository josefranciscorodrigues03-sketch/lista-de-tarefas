let tarefas = []

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    if (tarefas != "") {
        let botaoLimpar = document.createElement("button")
        botaoLimpar.className = "limpar"
        botaoLimpar.textContent = "limpar"
        botaoLimpar.onclick = () => limparLista()
        listaTarefas.appendChild(botaoLimpar)
    }

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]

        let botaoRemover = document.createElement("button")
        botaoRemover.className = 'remover'
        botaoRemover.textContent = 'remover'
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "editar"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoEditar)
        novaTarefa.appendChild(botaoRemover)
        listaTarefas.appendChild(novaTarefa)


    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}
function editarTarefa(i) {
    let tarefaEditada = prompt("edite a tarefa:")
    if (tarefaEditada.trim() != "") {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    mensagem.textContent = "lista de tarefas limpa!"
}