const calc = (operacao, a, b) => operacao(a, b);
const soma = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const divi = (a, b) => (b == 0 ? "ArithmeticException" : a / b);

const operations = [
  {
    name: "soma",
    method: soma,
  },
  {
    name: "sub",
    method: sub,
  },
  {
    name: "mult",
    method: mult,
  },
  {
    name: "divi",
    method: divi,
  },
];
module.exports = { calc, soma, sub, mult, divi, operations };
