import { sumar } from '../js/funcionestest.js';

describe('Suma de 2 numeros', () => {
  test('Sumar de 10 y 20 y arrojar 30', () => {
    expect(sumar(10, 20)).toBe(30);
  });
})