function choose (elemento) {
    const botaoclicado1 = document.querySelector(".pratoPrincipal .escolhe");
    if (botaoclicado1 !== null) {
        botaoclicado1.classList.remove('escolhe');
    }

    elemento.classList.add('escolhe');
}

function choosebebida (elemento) {
    const botaoclicado2 = document.querySelector(".bebida .escolhe");
    if (botaoclicado2 !== null) {
        botaoclicado2.classList.remove('escolhe');
    }

    elemento.classList.add('escolhe');
}

function choosesobremesa (elemento) {
    const botaoclicado3 = document.querySelector(".sobremesa .escolhe");
    if (botaoclicado3 !== null) {
        botaoclicado3.classList.remove('escolhe');
    }

    elemento.classList.add('escolhe');
}

