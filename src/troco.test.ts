import { calcularTroco } from "./troco";


describe('A função deve retornar o troco com cédulas e moedas', () => {

    test('A função deve retornar o total do troco', () => {
        const resultado = calcularTroco(250, 210.20);
        expect(resultado).toBeCloseTo(39.8);
    })
})