const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

function trocaImagemParaSol() {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
}

function trocaModoClaroParaModoEscuro() {
    body.classList.add("modo-escuro");
}

function trocaImagemParaLua() {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
}

function alteraModoTema(modo) {
    body.classList.toggle(modo);
}

botaoAlterarTema.addEventListener("click", () => {
    
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    alteraModoTema("modo-escuro");

//  Altera o modo de exibição e a imagem do botão usando as propriedades condicionais if e else

    if (modoEscuroEstaAtivo) {
    // *Utilizando o atributo "toggle" que significa "alterar", o body se altera adicionando ou removendo a classe "modo-escuro" ao clicar. Inutilizando a função trocaModoEscuroParaClaro()*  trocaModoEscuroParaModoClaro();
        trocaImagemParaSol();
    }

    else {
    // *Utilizando o atributo "toggle" que significa "alterar", o body se altera adicionando ou removendo a classe "modo-escuro" ao clicar. Inutilizando a função trocaModoClaroParaEscuro()*  trocaModoClaroParaModoEscuro();
        trocaImagemParaLua();
    }

});
