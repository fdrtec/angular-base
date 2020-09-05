// let inicial = [
//     { nome: 'Fernanda',  ficha:7 },
//     { nome: 'Fernando', ficha: 9 },
//     { nome: 'Gustavo', ficha: 11 }
//     ];
//
// let meio = inicial.splice(1, 1);
// console.log(meio)
// console.log(inicial)

// let qtdTestes = 3;
// let inicial = [
//     "Fernanda 7",
//     "Fernando 9",
//     "Gustavo 11"
// ];

// let qtdTestes = 3;
// let inicial = [
//     "Maria 4",
//     "Pedro 3",
//     "Joao 2"
// ]

// let qtdTestes = 5;
// let inicial = [
//     "Maria 7",
//     "Pedro 9",
//     "Joao_Vitor 5",
//     "Isabel 12",
//     "Laura 8"
// ];

let qtdTestes = 5;
let inicial = [
    "Maria 5",
    "Pedro 2",
    "Joao 5",
    "Isabel 12",
    "Luana 8"
]

// let qtdTestes = 6;
// let inicial = [
//     'Maria 5',
//     'Kaio 4',
//     'Pedro 8',
//     'Joao 1',
//     'Isabel 2',
//     'Laura 10'
// ]

do {
    let circulo = [];
    let contador = 0;
    let indexSair;
    let sentido = 'impar';

    for (let i = 0; i < qtdTestes; i++) {
        let dado = inicial[i].split(' ');
        let participante = {nome: dado[0], ficha: dado[1]}
        circulo.push(participante);
    }

    contador = parseInt(circulo[0].ficha);
    let aux = circulo.splice(0, 1);
    if (contador % 2 == 0) {
        circulo.reverse();
        sentido = 'par';
    }

    circulo = [...circulo, ...aux];

    while (circulo.length > 1) {
        let candidatoParaSair = circulo[((contador-1) % circulo.length) % circulo.length];
        circulo = circulo.filter((el, idx) => {
            if (el == candidatoParaSair) {
                indexSair = idx;
                return false;
            } else return true;
        });
        contador = parseInt(candidatoParaSair['ficha']);

        if (contador % 2 != 0) {
            let aux2 = circulo.slice(indexSair)
            circulo.splice(indexSair)
            circulo = [...aux2, ...circulo];
            if (sentido == 'par') circulo.reverse()
            sentido = 'impar'
        } else {
            let aux2 = circulo.slice(indexSair)
            circulo.splice(indexSair)
            circulo = [...aux2, ...circulo]
            if (sentido == 'impar') circulo.reverse();
            sentido = 'par'
        }
    }
    qtdTestes = 0;
    console.log(`Vencedor(a): ${circulo[0].nome}`)
} while (qtdTestes !== 0)
