const catalogoProdutos = document.getElementById('container-produto')

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'))
    for (const produto of produtosEscondidos) {
        produto.classList.remove("hidden")
    }
}

function exibirCordas() {
    exibirTodos()
    const produtosDePercussao = Array.from(catalogoProdutos.getElementsByClassName('percussao'))
    const produtosDeSopro = Array.from(catalogoProdutos.getElementsByClassName('sopro'))
    
    for (const produto of produtosDePercussao){
        produto.classList.add("hidden")
    }
    for (const produto of produtosDeSopro){
        produto.classList.add("hidden")
    }
}

function exibirPercussao(){
    exibirTodos()
    const produtosDeCordas = Array.from(catalogoProdutos.getElementsByClassName('corda'))
    const produtosDeSopro = Array.from(catalogoProdutos.getElementsByClassName('sopro'))
    
    for (const produto of produtosDeCordas){
        produto.classList.add("hidden")
    }
    for (const produto of produtosDeSopro){
        produto.classList.add("hidden")
    }
}

function exibirSopro(){
    exibirTodos()
    const produtosDeCordas = Array.from(catalogoProdutos.getElementsByClassName('corda'))
    const produtosDePercussao = Array.from(catalogoProdutos.getElementsByClassName('percussao'))
    
    for (const produto of produtosDeCordas){
        produto.classList.add("hidden")
    }
    for (const produto of produtosDePercussao){
        produto.classList.add("hidden")
    }
}


export function inicializarFiltros(){
    document.getElementById('exibir-todos').addEventListener('click', exibirTodos)
    document.getElementById('exibir-corda').addEventListener('click', exibirCordas)
    document.getElementById('exibir-percussao').addEventListener('click', exibirPercussao)
    document.getElementById('exibir-sopro').addEventListener('click', exibirSopro)
}