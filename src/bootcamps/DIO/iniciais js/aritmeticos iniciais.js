// let qtd = 3
// let simulacaoDeEntrada = [
//     { nome:'Maria Joao', linha: 'branco P'},
//     { nome: 'Marcio Guess', linha:'vermelho P'},
//     { nome: 'Maria Jose', linha: 'branco P'}
// ]
//
// let lista = [];
// let info = {}
// let linha2 = null
//
// for(let i =0; i < qtd; i++){
//     info.nome = simulacaoDeEntrada[i].nome;
//     linha2 = simulacaoDeEntrada[i].linha;
//     info.cor = linha2.split(" ")[0];
//     info.tamanho = linha2.split(" ")[1];
//     lista.push(info)
//     info = {}
// }
//
// let ordenado = lista.sort(comparadorValores);
//
// ordenado.forEach(item => console.log(` ${item.cor} ${item.tamanho} ${item.nome}`))
//
// function comparadorValores(a, b){
//     if(a.cor == b.cor){
//         if(a.tamanho == b.tamanho){
//             if(a.nome == b.nome) return 0
//             else return a.nome > b.nome ? 1 : -1
//         } else return a.tamanho < b.tamanho ? 1 : -1
//     } else return a.cor > b.cor ? 1 : -1
// }

// if (x == y) {
//     return 0;
// }
// return x > y ? 1 : -1;


// function compareValues(key, order = 'asc') {
//     return function innerSort(a, b) {
//         if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
//         const comparison = a[key].localeCompare(b[key]);
//
//         return (
//             (order === 'desc') ? (comparison * -1) : comparison
//         );
//     };
// }

// let qtd = 3
// let listas = []
// listas[0] ="suco carne frango carne chocolate";
// listas[1] = "sacola amaciante"
// listas[2] = "leite chocolate suco laranja"
//
// for(let i=0; i < qtd; i++) {
//     let set = new Set(listas[i].split(" ").sort());
//     console.log([...set].join(" "))
// }


// let line = parseInt(gets());
// let pares = [];
// let impares = [];
// for(let i=0; i < line; i++) {
//     let num = parseInt(gets())
//     if(num % 2 == 0) pares.push(num);
//     else impares.push(num);
// }
//
// pares.sort((a, b) => a-b).forEach(num => console.log(num));
// impares.sort((a, b) => b-a).forEach(num => console.log(num))

// http://muitomaiscodigoss.blogspot.com/2018/09/uri-problema-1259-pares-e-impares.html


// let valor = 89;
//
// function contadorDeNotas(valor) {
//     let notas100 = 0;
//     let notas50 = 0;
//     let notas20 = 0;
//     let notas10 = 0;
//     let notas5 = 0;
//     let notas2 = 0;
//     let notas1 = 0;
//     let totalNotas = 0;
//
//     if(valor >= 100) {
//         notas100 = parseInt(valor/100);
//         totalNotas += notas100;
//         valor = valor % 100;
//     }
//
//     if(valor >= 50) {
//         notas50 = parseInt(valor/50);
//         totalNotas += notas50;
//         valor = valor % 50;
//     }
//
//     if(valor >= 20) {
//         notas20 = parseInt(valor/20);
//         totalNotas += notas20;
//         valor = valor % 20;
//     }
//
//     if(valor >= 10) {
//         notas10 = parseInt(valor/10);
//         totalNotas += notas10;
//         valor = valor % 10;
//     }
//
//     if(valor >= 5) {
//         notas5 = parseInt(valor/5);
//         totalNotas += notas5;
//         valor = valor % 5;
//     }
//
//     if(valor >= 2) {
//         notas2 = parseInt(valor/2);
//         totalNotas += notas2;
//         valor = valor % 2;
//     }
//
//     if(valor >= 1) {
//         notas1 = parseInt(valor);
//         totalNotas += notas1;
//     }
//
//     console.log(totalNotas)
//     console.log(`${notas100} nota(s) de R$ 100,00`);
//     console.log(`${notas50} nota(s) de R$ 50,00`);
//     console.log(`${notas20} nota(s) de R$ 20,00`);
//     console.log(`${notas10} nota(s) de R$ 10,00`);
//     console.log(`${notas5} nota(s) de R$ 5,00`);
//     console.log(`${notas2} nota(s) de R$ 2,00`);
//     console.log(`${notas1} nota(s) de R$ 1,00`);
// }
//
// contadorDeNotas(valor);


// let valor = 6;
// function range(start, end) {
//     var ans = [];
//     for (let i = start; i <= end; i++) {
//         if(i % 2 == 0) console.log(i);
//     }
// }
// range (1, valor)
