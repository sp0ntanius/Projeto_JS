import { catalogo, desenharNoCarrinhoSimples, lerLocalStorage, apagarDoLocalStorage, salvarLocalStorage } from "./src/utilidades";

const idsProdutosNoCheckout = lerLocalStorage('carrinho') 

function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQtdd = lerLocalStorage('carrinho') ?? {}
    for (const idProduto in idsProdutoCarrinhoComQtdd){
        desenharNoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQtdd[idProduto])
    }
}

function finalizarCompra(evento) {
    evento.preventDefault()
    const idsProdutoCarrinhoComQtdd = lerLocalStorage('carrinho') ?? {}
    if (Object.keys(idsProdutoCarrinhoComQtdd).length == 0) {
        return
    }

    const dataAtual = new Date()
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedidos: idsProdutoCarrinhoComQtdd
    }
    const historicoDePedidos = lerLocalStorage('historico') ?? []
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos]
    
    salvarLocalStorage('historico', historicoDePedidosAtualizado)
    apagarDoLocalStorage('carrinho')

    window.location.href = './pedidos.html'
}

function precoCarrinhoNoCheckout() {
    const precoCheckout = document.getElementById("preco-total-checkout")
    let precoTotalCheckout = 0

    for (const idProduto in idsProdutosNoCheckout) {
        precoTotalCheckout += catalogo.find(p => p.id == idProduto).preco * idsProdutosNoCheckout[idProduto]
    }

    precoCheckout.innerHTML = `Total: $${precoTotalCheckout}`
}

desenharProdutosCheckout()

precoCarrinhoNoCheckout()

document.addEventListener('submit', (evt) => finalizarCompra(evt))