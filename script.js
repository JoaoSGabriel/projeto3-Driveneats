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
    transformanumero ();
    }
}

let valor1;
let valor2;
let valor3;
let arroz;
let feijao;
let macarrao;
let resposta1;
let resposta2;
let resposta3;
let valortotal;

function transformanumero () {
    arroz = document.querySelector(".pratoPrincipal .escolhe .text div:nth-child(3)");
    arroz = arroz.innerHTML;
    valor1 = arroz.replace("R$", "");
    valor1 = valor1.replace(",", ".");
    feijao = document.querySelector(".bebida .escolhe .text div:nth-child(3)");
    feijao = feijao.innerHTML;
    valor2 = feijao.replace("R$", "");
    valor2 = valor2.replace(",", ".");
    macarrao = document.querySelector(".sobremesa .escolhe .text div:nth-child(3)");
    macarrao = macarrao.innerHTML;
    valor3 = macarrao.replace("R$", "");
    valor3 = valor3.replace(",", ".");
    valor1 = Number(valor1);
    valor2 = Number(valor2);
    valor3 = Number(valor3);
    valortotal = valor1 + valor2 + valor3;
    mensagemzap ();
}

function mensagemzap () {
    if (pratodopedido && bebidadopedido && sobremesadopedido) {
        let comida = document.querySelector(".pratoPrincipal .escolhe .text div");
        resposta1 = comida.innerHTML;
        let vinhocaro = document.querySelector(".bebida .escolhe .text div");
        resposta2 = vinhocaro.innerHTML;
        let sobremesacaro = document.querySelector(".sobremesa .escolhe .text div");
        resposta3 = sobremesacaro.innerHTML;
        valortotal = valortotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        let uri = `Olá, gostaria de fazer o pedido:
        -Prato: ${resposta1}
        -Bebida: ${resposta2}
        -Sobremesa: ${resposta3}
        Total: ${valortotal}`;
        let encoded = encodeURIComponent(uri);
        const ultimaparte = document. querySelector("#meu-link");
        ultimaparte. href = `https://wa.me/5527997429980?text= ${encoded}`;
    }
    
}