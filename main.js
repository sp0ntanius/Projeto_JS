import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import { inicializarCarrinho, renderizarCarrinho } from "./src/menuCarrinho";



renderizarCatalogo();
inicializarCarrinho();
renderizarCarrinho();
inicializarFiltros()