export const catalogo = [{
    id : '1',
    nomeProd : 'Bandolim',
    marca : 'Yamaha',
    preco : 250,
    nomeArqvImg : 'produto-1.jpg',
    tipo : 'corda'
},
{
    id : '2',
    nomeProd : 'Guitarra Elétrica',
    marca : 'Sony',
    preco : 450,
    nomeArqvImg : 'produto-2.jpg',
    tipo : 'corda'
},
{
    id : '3',
    nomeProd : 'Lira',
    marca : 'Yamaha',
    preco : 360,
    nomeArqvImg : 'produto-3.jpg',
    tipo : 'corda'
},
{
    id : '4',
    nomeProd : 'Shamisen',
    marca : 'Yamaha',
    preco : 500,
    nomeArqvImg : 'produto-4.jpg',
    tipo : 'corda'
},
{
    id : '5',
    nomeProd : 'Violão',
    marca : 'Woodstock',
    preco : 425,
    nomeArqvImg : 'produto-5.jpg',
    tipo : 'corda'
},
{
    id : '6',
    nomeProd : 'Violino',
    marca : 'Moscow',
    preco : 380,
    nomeArqvImg : 'produto-6.jpg',
    tipo : 'corda'
},
{
    id : '7',
    nomeProd : 'Tamborim',
    marca : 'Lufen',
    preco : 240,
    nomeArqvImg : 'produto-1.jpg',
    tipo : 'percussao'
},
{
    id : '8',
    nomeProd : 'Baquete',
    marca : 'Casio',
    preco : 170,
    nomeArqvImg : 'produto-2.jpg',
    tipo : 'percussao'
},
{
    id : '9',
    nomeProd : 'Bateria',
    marca : 'Nagano',
    preco : 1250,
    nomeArqvImg : 'produto-3.jpg',
    tipo : 'percussao'
},
{
    id : '10',
    nomeProd : 'Pandeiro',
    marca : 'Torelli',
    preco : 210,
    nomeArqvImg : 'produto-4.jpg',
    tipo : 'percussao'
},
{
    id : '11',
    nomeProd : 'Tarola',
    marca : 'Botafogo',
    preco : 148,
    nomeArqvImg : 'produto-5.jpg',
    tipo : 'percussao'
}, 
{
    id : '12',
    nomeProd : 'Xilofone',
    marca : 'Lamparini',
    preco : 720,
    nomeArqvImg : 'produto-6.jpg',
    tipo : 'percussao'
},
{
    id : '13',
    nomeProd : 'Flauta Doce',
    marca : 'Yamaha',
    preco : 25,
    nomeArqvImg : 'produto-1.jpg',
    tipo : 'sopro'
},
{
    id : '14',
    nomeProd : 'Flauta de Orquestra',
    marca : 'King',
    preco : 140,
    nomeArqvImg : 'produto-2.jpg',
    tipo : 'sopro'
},
{
    id : '15',
    nomeProd : 'Gaita',
    marca : 'Fender',
    preco : 60,
    nomeArqvImg : 'produto-3.jpg',
    tipo : 'sopro'
},
{
    id : '16',
    nomeProd : 'Saxofone',
    marca : 'Yamaha',
    preco : 150,
    nomeArqvImg : 'produto-4.jpg',
    tipo : 'sopro'
},
{
    id : '17',
    nomeProd : 'Tuba',
    marca : 'Casio',
    preco : 290,
    nomeArqvImg : 'produto-5.jpg',
    tipo : 'sopro'
},
{
    id : '18',
    nomeProd : 'Trompete',
    marca : 'Yamaha',
    preco : 110,
    nomeArqvImg : 'produto-6.jpg',
    tipo : 'sopro'
},
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao))
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave))
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave)
}

export function desenharNoCarrinhoSimples (idProduto, idContainerHtml, qtddProduto) {
    const produto = catalogo.find(p => p.id === idProduto);
      
    const containerProdutos = document.getElementById(idContainerHtml);
    
    const elementoArticle = document.createElement('article'); // <article></article>
    const articleClasses = ['flex', 'bg-zinc-500', 'rounded-lg', 'p-1', 'relative', 'mb-1', 'w-96'];
    for (const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
    }
  
    // <article class="flex bg-zinc-800 rounded-lg relative p-1"></article>
    
    const cartaoProdutoCarrinho = 
    `<img src="./assets/${produto.tipo}/${produto.nomeArqvImg}" alt="Carrinho: ${produto.nomeProd}" class="w-24 rounded-lg p-1">
      <div class="flex flex-col justify-between p-1">
        <p class="text-zinc-200 text-lg">${produto.nomeProd}</p>
        <p class="text-zinc-400 text-xs">${produto.marca}</p>
        <p class="text-green-500 text-lg font-medium">$${produto.preco}</p>
      </div>
      <div class="flex text-zinc-100 items-end absolute bottom-1 right-5 text-lg">
        <p id="quantidade-${produto.id}" class="ml-3">${qtddProduto}</p>
      </div>`;
      
      elementoArticle.innerHTML = cartaoProdutoCarrinho; // <article class="flex bg-gray-800 rounded-lg relative p-1">COM CODIGO DO PRODUTO</article>
  
      containerProdutos.appendChild(elementoArticle);
}