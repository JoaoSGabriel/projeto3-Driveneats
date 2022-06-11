let pratodopedido;
let bebidadopedido;
let sobremesadopedido;

function choose (elemento) {
    pratodopedido = elemento.innerHTML;
    let botaoclicado1 = document.querySelector(".pratoPrincipal .escolhe");
    if (botaoclicado1 !== null) {
        botaoclicado1.classList.remove('escolhe');
    }

    elemento.classList.add('escolhe');
    fecharopedido ();
}

function choosebebida (elemento) {
    bebidadopedido = elemento.innerHTML;
    let botaoclicado2 = document.querySelector(".bebida .escolhe");
    if (botaoclicado2 !== null) {
        botaoclicado2.classList.remove('escolhe');
    }

    elemento.classList.add('escolhe');
    fecharopedido ();
}

function choosesobremesa (elemento) {
    sobremesadopedido = elemento.innerHTML;
    let botaoclicado3 = document.querySelector(".sobremesa .escolhe");
    if (botaoclicado3 !== null) {
        botaoclicado3.classList.remove('escolhe');
    }

    elemento.classList.add('escolhe');
    fecharopedido ();
}

function fecharopedido () {
    mensagemzap ();
    if (pratodopedido && bebidadopedido && sobremesadopedido) {
    let arvore = document.querySelector('.final')
    arvore.classList.add('escondido')
    let madeira = document.querySelector('.buy')
    madeira.classList.remove('escondido')
    }
}

let mensagemAPI = "https://api.whatsapp.com/send?phone=5527997429980&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%20-%20Prato%3A%20" + "pratoescolhido" + "%20-%20Bebida%3A%20" + "bebidaescolido" + "%20-%20Sobremesa%3A%20" + "sobremesaescolhido" + "%20Total%3A%20" + "R%24%20" + "valortotal";

function mensagemzap () {
    const a = document.querySelector("#meu-link");
    a.href = mensagemAPI;
}