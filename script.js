const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1) Você se encontra no mundo de Terraria e possui vários equipamentos de batalha feitos de prata: uma armadura, uma espada e um arco. A noite chega e você sente uma presença maligna te observando... O Olho de Cthulhu acordou e está vindo em sua direção, o que você faz?",
        alternativas: [
            {
                texto: "A) Eu enfrento ele.",
                afirmacao: ""
            },
            {
                texto: "B) Eu tento fugir mas fico encurralado, tendo como a única opção a batalha.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "2) Após derrotar o Olho de Cthulhu, você decide ir para uma caverna no bioma de carmin. Após quebrar três corações no subterrâneo você desperta uma criatura... O Cérebro de Cthulhu acordou! O que você faz?",
        alternativas: [
            {
                texto: "A) Enfrento ele no subterrâneo.",
                afirmacao: ""
            },
            {
                texto: "B) Enfrento ele na superfície.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "3) Você derrota o Cérebro de Cthulhu e decide explorar o subterrâneo da selva, lá você encontra uma colméia gigantesca. O que você faz?",
        alternativas: [
            {
                texto: "A) Utilizo uma picareta para entrar na colméia sem grande destruição, mas acabo destruindo uma larva sem querer.",
                afirmacao: ""
            },
            {
                texto: "B) Utilizo dinamites, que destrói a larva e grande parte da colméia.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "4) Com a Larva destruída você desperta uma criatura... A Abelha Rainha acordou! O que você faz?",
        alternativas: [
            {
                texto: "A) Utilizo as dinamites que me restaram para explodir tudo.",
                afirmacao: ""
            },
            {
                texto: "B) Utilizo uma metralhadora tubarão para enfrentá-la.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "5) A Abelha Rainha foi derrotada! Porém, um exército de goblins está marchando em direção à sua base. O que você faz?",
        alternativas: [
            {
                texto: "A) Eu intercepto os goblins no meio do caminho e os enfrento.",
                afirmacao: ""
            },
            {
                texto: "B) Eu volto para minha base e espero os goblins chegarem.",
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
    caixaPerguntas.textContent = "Fim do Questionário";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
