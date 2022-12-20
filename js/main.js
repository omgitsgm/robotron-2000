const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const robotron = document.querySelector("#robotron");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    },
    "cores":{
        "0": "img/Robotron 2000 - Azul.png",
        "1": "img/Robotron 2000 - Amarelo.png",
        "2": "img/Robotron 2000 - Branco.png",
        "3": "img/Robotron 2000 - Preto.png",
        "4": "img/Robotron 2000 - Rosa.png",
        "5": "img/Robotron 2000 - Vermelho.png"
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        if(elemento.dataset.peca != "cores"){
            // console.log("!cor");
            atualizaEstatisticas(evento.target.dataset.peca);
        } else{
            // console.log(evento.target.parentNode.childNodes[3].value)
            atualizaCor(evento.target.dataset.peca, evento.target.parentNode.childNodes[3].value)
        }
        
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca){
    console.log(pecas[peca]);

    estatisticas.forEach((elemento) => {
        console.log(elemento.dataset.estatistica);
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}

function atualizaCor(peca, cor){
    // console.log(pecas[peca]);
    // console.log(pecas[peca][cor]);
    robotron.src = pecas[peca][cor];
}