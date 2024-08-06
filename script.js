const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1) Você se encontra no mundo de Terraria e possui vários equipamentos de batalha feitos de prata: uma armadura, uma espada e um arco. A noite chega e você sente uma presença maligna te observando... O Olho de Cthulhu acordou e está vindo em sua direção, o que você faria?",
        alternativas: [
            {
                texto: "A) Enfrentaria ele.",
                afirmacao: ""
            },
            {
                texto: "B) Tentaria fugir mas ficaria encurralado, tendo a luta como única opção.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "2",
        alternativas: [
            {
                texto: "A",
                afirmacao: ""
            },
            {
                texto: "B",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "3",
        alternativas: [
            {
                texto: "A",
                afirmacao: ""
            },
            {
                texto: "B",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "4",
        alternativas: [
            {
                texto: "A",
                afirmacao: ""
            },
            {
                texto: "B",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "5",
        alternativas: [
            {
                texto: "A",
                afirmacao: ""
            },
            {
                texto: "B",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
