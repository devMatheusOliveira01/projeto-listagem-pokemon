const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");


function trocaImagemParaSol() {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
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

    if (modoEscuroEstaAtivo) {
        trocaImagemParaSol();
    }

    else {
        trocaImagemParaLua();
    }
});