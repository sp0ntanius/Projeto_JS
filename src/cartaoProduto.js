import { adicionarNoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {

    for (const produtoCatalogo of catalogo) {
        
        const cartaoProduto = `<div class= 'border-solid shadow-xl shadow-stone-400/50 rounded-lg w-48 m-2 flex flex-col p-2 justify-between group ${produtoCatalogo.tipo}' id="card-produto-${produtoCatalogo.id}">
        <img src="./assets/${produtoCatalogo.tipo}/${produtoCatalogo.nomeArqvImg}" 
        alt="Produto ${produtoCatalogo.id}"
        class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p class='text-xs'>${produtoCatalogo.marca}</p>
        <p class='font-normal'>${produtoCatalogo.nomeProd}</p>
        <p class='font-semibold'>$${produtoCatalogo.preco}</p>
        <button id='adicionar-${produtoCatalogo.id}' class="bg-zinc-900 text-zinc-200 hover:bg-zinc-700"
        ><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;
        
        document.getElementById('container-produto').innerHTML += cartaoProduto;
    }
    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener("click", () => adicionarNoCarrinho(produtoCatalogo.id));
    }
}
