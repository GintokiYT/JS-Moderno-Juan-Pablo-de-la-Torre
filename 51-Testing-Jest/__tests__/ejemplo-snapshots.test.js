//* Actualia la snapshot
// npm t -- -u 

const cliente = {
  nombre: 'Juan 2',
  balance: 500,
  tipo: 'Premium',
};

describe('Testing al cliente', () => {
  test('Es Juan Pablo', () => {
    expect(cliente).toMatchSnapshot();
  });
});