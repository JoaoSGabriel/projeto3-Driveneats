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
let endereco;
let nomecliente;

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
}

let mesabranca;
let mesaverde;
let tapetebranco;
let tapeteamarela;
let tapeteverde;
let tapeteazul;
let tapetevermelho;
let tapeteroxo;
let tapeterosa;

function perguntafinal () {
    mesabranca = document.querySelector(".bonuslegal");
    mesabranca.classList.remove('escondido');
    let comida = document.querySelector(".pratoPrincipal .escolhe .text div");
    resposta1 = comida.innerHTML;
    let vinhocaro = document.querySelector(".bebida .escolhe .text div");
    resposta2 = vinhocaro.innerHTML;
    let sobremesacaro = document.querySelector(".sobremesa .escolhe .text div");
    resposta3 = sobremesacaro.innerHTML;
    valortotal = valortotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    tapetebranco = document.querySelector(".detalhes:nth-child(1) div:nth-child(1)")
    tapetebranco.innerHTML = `${resposta1}`
    tapeteamarela = document.querySelector(".detalhes:nth-child(1) div:nth-child(2)")
    tapeteamarela.innerHTML = `${arroz}`
    tapeteverde = document.querySelector(".detalhes:nth-child(2) div:nth-child(1)")
    tapeteverde.innerHTML = `${resposta2}`
    tapeteazul = document.querySelector(".detalhes:nth-child(2) div:nth-child(2)")
    tapeteazul.innerHTML = `${feijao}`
    tapetevermelho = document.querySelector(".detalhes:nth-child(3) div:nth-child(1)")
    tapetevermelho.innerHTML = `${resposta3}`
    tapeteroxo = document.querySelector(".detalhes:nth-child(3) div:nth-child(2)")
    tapeteroxo.innerHTML = `${macarrao}`
    tapeterosa = document.querySelector(".detalhes:nth-child(4) div:nth-child(2)")
    tapeterosa.innerHTML = `${valortotal}`
}

function cancelarpedido () {
    mesaverde = document.querySelector(".bonuslegal");
    mesaverde.classList.add('escondido');
}

function confirmardados () {
    endereco = prompt("Qual o seu endere??o?")
    nomecliente = prompt("Qual o seu nome?")
    mensagemzap ();
}

function mensagemzap () {
    let uri = `Ol??, gostaria de fazer o pedido:
        -Prato: ${resposta1}
        -Bebida: ${resposta2}
        -Sobremesa: ${resposta3}
        Total: ${valortotal}
        
        Nome: ${nomecliente}
        Endere??o: ${endereco}`;
        let encoded = encodeURIComponent(uri);
        const ultimaparte = document. querySelector("#meu-link");
        ultimaparte. href = `https://wa.me/5527997429980?text= ${encoded}`;
}