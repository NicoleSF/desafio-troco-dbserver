const moedas: number[] = [1, 0.5, 0.25, 0.1, 0.05];
const cedulas: number[] = [100, 50, 20, 10, 5, 2];



export function calcularTroco(valorPago: number, valorCompra: number) {

  let troco = valorPago - valorCompra;

  return (+troco.toFixed(2));
}

console.log(`Seu troco é ${calcularTroco(100, 78.25)}`);



export function calcularMoedasNotas(troco: number) {

  let resultado = [];

  for (let i = 0; i < cedulas.length; i++) {
    let quantidadeCedulas = Math.floor(Math.floor(troco) / cedulas[i]); //quantidade de cédulas necessárias para o troco
    if (quantidadeCedulas > 0) {
      troco = troco % cedulas[i];
      resultado.push(
        `É necessário ${quantidadeCedulas} nota(s) de ${cedulas[i]} reais`
      );
    }
  }

  for (let i = 0; i < moedas.length; i++) {
    let quantidadeMoedas = Math.floor(troco / moedas[i]);
    if (quantidadeMoedas > 0) {
      troco -= quantidadeMoedas * moedas[i];
      troco = +troco.toFixed(2);
      resultado.push(
        `É necessário ${quantidadeMoedas} moeda(s) de ${moedas[i]} real/centavos`
      );
    }
  }

  return resultado;
}

console.log(calcularMoedasNotas(calcularTroco(100, 78.25)));




// export function calcularTroco(valorPago: number, valorCompra: number){

//     let troco = valorPago - valorCompra;
//     console.log(`Seu troco ficou em R$ ${+troco.toFixed(2)}`);

//     let resultado = [];

//     for(let i = 0; i < cedulas.length; i++){
//         let quantidadeCedulas = Math.floor(Math.floor(troco) / cedulas[i]); //quantidade de cédulas necessárias para o troco
//         if(quantidadeCedulas > 0){
//              troco = troco % cedulas[i];
//             resultado.push(`É necessário ${quantidadeCedulas} nota(s) de ${cedulas[i]} reais`);
//         }

//     }

//     for(let i = 0; i < moedas.length; i++){
//         let quantidadeMoedas = Math.floor(troco / moedas[i]);
//         if(quantidadeMoedas > 0){
//             troco -= quantidadeMoedas * moedas[i];
//             troco = +troco.toFixed(2);
//             console.log(troco);
//             resultado.push(`É necessário ${quantidadeMoedas} moeda(s) de ${moedas[i]} real/centavos`);
//         }

//     }

//     return resultado;

// }

// console.log(calcularTroco(100, 40));

// FUNÇÃO SEPARADA DAS CÉDULAS

// function contarCedulas(valorPago:number, valorCompra:number){

//     let troco = valorPago - valorCompra;
//     let resultado = [];

//     for(let i = 0; i < cedulas.length; i++){
//         let quantidadeCedulas = Math.floor(Math.floor(troco) / cedulas[i]); //quantidade de cédulas necessárias para o troco
//         if(quantidadeCedulas > 0){
//              troco = troco % cedulas[i];
//             //resultado.push({quantidade: quantidadeCedulas, valor: cedulas[i]}) valor são as notas
//             resultado.push(`Ficou a quantidade de ${quantidadeCedulas} nota(s) de ${cedulas[i]} reais`);
//         }

//     }

//     return resultado;
// }

// console.log(`O valor do troco é:`, contarCedulas(300, 235));

//FUNÇÃO SEPARADA DAS MOEDAS

// function contarMoedas(valorPago: number, valorCompra: number){

//     let troco = valorPago - valorCompra;
//     let resultado = [];

//     for(let i = 0; i < moedas.length; i++){
//         let quantidadeMoedas = Math.floor(troco / moedas[i]);
//         if(quantidadeMoedas > 0){
//             troco -= quantidadeMoedas * moedas[i];
//             troco = +troco.toFixed(2);
//             // resultado.push({quantidade: quantidadeMoedas, valor: moedas[i]})
//             resultado.push(`Ficou a quantidade de ${quantidadeMoedas} moeda(s) de ${moedas[i]} real/centavos`);
//         }

//     }

//     return resultado;

// }

// console.log(contarMoedas(8, 3.70));
