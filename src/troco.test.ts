import { calcularTroco } from "./troco";
import { calcularMoedasNotas } from "./troco";

describe("Função de troco", () => {
  test("A função deve retornar o troco", () => {
    const resultado = calcularTroco(100, 84.6);
    expect(resultado).toBe(15.4);
  });
});

describe("Função para calcular a quantidade de notas e moedas no troco", () => {
  test("A função deve retornar as notas de 100, 50, 20, 10 e 5 para o troco de 187", () => {
    const resultado = calcularMoedasNotas(calcularTroco(310, 123));
    const resultadoEsperado = [
      "É necessário 1 nota(s) de 100 reais",
      "É necessário 1 nota(s) de 50 reais",
      "É necessário 1 nota(s) de 20 reais",
      "É necessário 1 nota(s) de 10 reais",
      "É necessário 1 nota(s) de 5 reais",
      "É necessário 1 nota(s) de 2 reais",
    ];
    expect(resultado).toEqual(resultadoEsperado);
  });

  test("A função deve retornar moedas de 1, 0.50, 0.25, 0.10, 0.05 para o troco de 1.95", () => {
    const resultado = calcularMoedasNotas(calcularTroco(2, 0.05));
    const resultadoEsperado = [
      "É necessário 1 moeda(s) de 1 real/centavos",
      "É necessário 1 moeda(s) de 0.5 real/centavos",
      "É necessário 1 moeda(s) de 0.25 real/centavos",
      "É necessário 2 moeda(s) de 0.1 real/centavos",
    ];
    expect(resultado).toEqual(resultadoEsperado);
  });

  test("A função deve retornar moedas de 0.1 e 0.5 para o troco de 0.15", () => {
    const resultado = calcularMoedasNotas(calcularTroco(2, 1.85));
    const resultadoEsperado = [
      "É necessário 1 moeda(s) de 0.1 real/centavos",
      "É necessário 1 moeda(s) de 0.05 real/centavos",
    ];
    expect(resultado).toEqual(resultadoEsperado);
  });

  test("A função deve retornar duas notas de 20 para o troco de 40", () => {
    const resultado = calcularMoedasNotas(calcularTroco(80, 40));
    const resultadoEsperado = ["É necessário 2 nota(s) de 20 reais"];
    expect(resultado).toEqual(resultadoEsperado);
  });

  test("A função deve retornar uma nota de 50 e outra de 10 para o troco de 60", () => {
    const resultado = calcularMoedasNotas(calcularTroco(100, 40));
    const resultadoEsperado = [
      "É necessário 1 nota(s) de 50 reais",
      "É necessário 1 nota(s) de 10 reais",
    ];
    expect(resultado).toEqual(resultadoEsperado);
  });
});







// describe('A função deve retornar o troco com cédulas e moedas', () => {

//     test('A função deve retornar o total do troco', () => {
//         const resultado = calcularTroco(250, 210.20);
//         const resultadoEsperado = ["É necessário 1 nota(s) de 20 reais", "É necessário 1 nota(s) de 10 reais", "É necessário 1 nota(s) de 5 reais", "É necessário 2 nota(s) de 2 reais", "É necessário 1 moeda(s) de 0.5 real/centavos", "É necessário 1 moeda(s) de 0.25 real/centavos", "É necessário 1 moeda(s) de 0.05 real/centavos"]
//         expect(resultado).toEqual(resultadoEsperado);
//     })

//     test('A função deve retornar as notas de 100, 50, 20, 10 e 5 para o troco de 187', () => {
//         const resultado = calcularTroco(310, 123);
//         const resultadoEsperado = ["É necessário 1 nota(s) de 100 reais", "É necessário 1 nota(s) de 50 reais","É necessário 1 nota(s) de 20 reais", "É necessário 1 nota(s) de 10 reais", "É necessário 1 nota(s) de 5 reais", "É necessário 1 nota(s) de 2 reais"];
//         expect(resultado).toEqual(resultadoEsperado);
//     })

//     test('A função deve retornar moedas de 1, 0.50, 0.25, 0.10, 0.05 para o troco de 1.95', () => {
//         const resultado = calcularTroco(2, 0.05);
//         const resultadoEsperado = ["É necessário 1 moeda(s) de 1 real/centavos","É necessário 1 moeda(s) de 0.5 real/centavos", "É necessário 1 moeda(s) de 0.25 real/centavos", "É necessário 2 moeda(s) de 0.1 real/centavos"];
//         expect(resultado).toEqual(resultadoEsperado);
//     })

//     test('A função deve retornar moedas de 0.1 e 0.5 para o troco de 0.15', () => {
//         const resultado = calcularTroco(2, 1.85);
//         const resultadoEsperado = ["É necessário 1 moeda(s) de 0.1 real/centavos", "É necessário 1 moeda(s) de 0.05 real/centavos"];
//         expect(resultado).toEqual(resultadoEsperado);
//     })

//     test('A função deve retornar duas notas de 20 para o troco de 40', () => {
//         const resultado = calcularTroco(80, 40);
//         const resultadoEsperado = ["É necessário 2 nota(s) de 20 reais"];
//         expect(resultado).toEqual(resultadoEsperado);
//     })

//     test('A função deve retornar uma nota de 50 e outra de 10 para o troco de 60', () => {
//         const resultado = calcularTroco(100, 40);
//         const resultadoEsperado = ["É necessário 1 nota(s) de 50 reais", "É necessário 1 nota(s) de 10 reais"];
//         expect(resultado).toEqual(resultadoEsperado);
//     })

// })
