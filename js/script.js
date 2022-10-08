//ATIVAR LINKS DO MENU

const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.toggle('ativo');
        console.log(link.href);
    }
}

links.forEach(ativarLink)

//ATIVAR ITENS DO ORCAMENTO

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }

    console.log(elemento);
    console.log(parametro);
}

parametros.forEach(ativarProduto);
