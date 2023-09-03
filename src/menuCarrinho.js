import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";

const idsProdutoCarrinhoComQtdd = lerLocalStorage('carrinho') ?? {};

function abrirCarrinho() {
    document.getElementById('carrinho').classList.remove('right-[-360px]');
    document.getElementById('carrinho').classList.add('right-[0px]');
}

function fecharCarrinho() {
    document.getElementById('carrinho').classList.remove('right-[0px]');
    document.getElementById('carrinho').classList.add('right-[-360px]');
}

function irParaCheckout(){
  if (Object.keys(idsProdutoCarrinhoComQtdd).length == 0) {
    return
  }
  window.location.href = './checkout.html'
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById('fechar-carrinho');
    const botaoAbrirCarrinho = document.getElementById('abrir-carrinho');
    const botaoIrParaCheckout = document.getElementById('finalizar-compra')

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
    botaoIrParaCheckout.addEventListener("click", irParaCheckout)
}

function incrementarQtddProduto(idProduto) {
  idsProdutoCarrinhoComQtdd[idProduto]++;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQtdd)
  atualizarPrecoCarrinho()
  attInfoQtdd(idProduto);
}

function decrementarQtddProduto(idProduto) {
  if (idsProdutoCarrinhoComQtdd[idProduto] == 1) {
    removerDoCarrinho(idProduto)
    return
  }
  idsProdutoCarrinhoComQtdd[idProduto]--;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQtdd)
  atualizarPrecoCarrinho()
  attInfoQtdd(idProduto);
}

function attInfoQtdd(idProduto){
  document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQtdd[idProduto];
}

function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQtdd[idProduto];
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQtdd)
  atualizarPrecoCarrinho()
  renderizarCarrinho()
}


function desenharNoCarrinho (idProduto) {
  const produto = catalogo.find(p => p.id === idProduto);
    
  const containerProdutos = document.getElementById('produtos-carrinho');
  
  const elementoArticle = document.createElement('article'); // <article></article>
  const articleClasses = ['flex', 'bg-zinc-800', 'rounded-lg', 'p-1', 'relative'];
  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  // <article class="flex bg-gray-800 rounded-lg relative p-1"></article>
  
  const cartaoProdutoCarrinho = 
  `<button id="remover-item-${produto.id}" class="absolute top-1 right-2 hover:text-zinc-400"><i class="fa-solid fa-circle-xmark"></i></button>    
  <img src="./assets/${produto.tipo}/${produto.nomeArqvImg}" alt="Carrinho: ${produto.nomeProd}" class="w-24 rounded-lg p-1">
    <div class="flex flex-col justify-between p-1">
      <p class="text-zinc-100 text-lg">${produto.nomeProd}</p>
      <p class="text-zinc-300 text-xs">${produto.marca}</p>
      <p class="text-green-700 text-lg font-medium">$${produto.preco}</p>
    </div>
    <div class="flex text-zinc-100 items-end absolute bottom-1 right-5 text-lg">
      <button id="decrementar-produto-${produto.id}">-</button>
      <p id="quantidade-${produto.id}" class="ml-3">${idsProdutoCarrinhoComQtdd[produto.id]}</p>
      <button id="incrementar-produto-${produto.id}" class="ml-2">+</button>
    </div>`;
    
    elementoArticle.innerHTML = cartaoProdutoCarrinho; // <article class="flex bg-gray-800 rounded-lg relative p-1">COM CODIGO DO PRODUTO</article>

    containerProdutos.appendChild(elementoArticle);

    document.getElementById(`decrementar-produto-${produto.id}`).addEventListener("click", () => decrementarQtddProduto(produto.id));

    document.getElementById(`incrementar-produto-${produto.id}`).addEventListener("click", () => incrementarQtddProduto(produto.id));

    document.getElementById(`remover-item-${produto.id}`).addEventListener("click", () => removerDoCarrinho(produto.id))
}


export function renderizarCarrinho() {
  const containerProdutos = document.getElementById('produtos-carrinho');
  containerProdutos.innerHTML = ""
  
  for (const idProduto in idsProdutoCarrinhoComQtdd){
    atualizarPrecoCarrinho()
    desenharNoCarrinho(idProduto)
  }
  
  
}

export function adicionarNoCarrinho(idProduto) {
  
  if(idProduto in idsProdutoCarrinhoComQtdd){
    incrementarQtddProduto(idProduto);
    return;
  }

  idsProdutoCarrinhoComQtdd[idProduto] = 1
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQtdd)
  atualizarPrecoCarrinho()
  desenharNoCarrinho(idProduto)
  }

export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById('preco-total');
  let precoTotalCarrinho = 0;
    
  for(const idProdutoNoCarrinho in idsProdutoCarrinhoComQtdd){
    precoTotalCarrinho += catalogo.find(p => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQtdd[idProdutoNoCarrinho];
  }
    
  precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;
}