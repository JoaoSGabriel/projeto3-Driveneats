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
    if (pratodopedido && bebidadopedido && sobremesadopedido) {
    let arvore = document.querySelector('.final')
    arvore.classList.add('escondido')
    let madeira = document.querySelector('.buy')
    madeira.classList.remove('escondido')
    mensagemzap ();
    }
}

let valor1 = document.querySelector(".pratoPrincipal .escolhe .text div:nth-child(3)");
let valor2 = document.querySelector(".bebida .escolhe .text div:nth-child(3)");
let valor3 = document.querySelector(".sobremsa .escolhe .text div:nth-child(3)");
let resposta1;
let resposta2;
let resposta3;

function mensagemzap () {
    if (pratodopedido && bebidadopedido && sobremesadopedido) {
        let comida = document.querySelector(".pratoPrincipal .escolhe .text div");
        resposta1 = comida.innerHTML;
        let vinhocaro = document.querySelector(".bebida .escolhe .text div");
        resposta2 = vinhocaro.innerHTML;
        let sobremesacaro = document.querySelector(".sobremesa .escolhe .text div");
        resposta3 = sobremesacaro.innerHTML;
        let uri = `Olá, gostaria de fazer o pedido: /n- Prato: ${resposta1} /n- Bebida: ${resposta2} /n- Sobremesa: ${resposta3} /nTotal: R$ 27.70`;
        let encoded = encodeURIComponent(uri);
        const ultimaparte = document. querySelector("#meu-link");
        ultimaparte. href = `https://wa.me/5527997429980?text= ${encoded}`;
    }
    
}