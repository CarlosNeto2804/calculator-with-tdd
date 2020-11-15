const { calc, soma, sub, mult, divi } = require("./calc.service");
describe("precisa testar as 4 operações matematicas basicas ", () => {
  test("deve somar 1 + 2 e ser igual a 3", () => {
    expect(calc(soma, 1, 3)).toBe(4);
  });

  test("deve subtrair dois numeros 4 - 5 e ser igual -1", () => {
    expect(sub).toBeInstanceOf(Function)
    expect(calc(sub, 4, 5)).toBe(-1);
  });

  test("deve multiplicar 9*9 e ser igul a 81", () => {
    expect(calc(mult, 9, 9)).toBe(81);
  });

  test("deve dividir 10 por 2 e ser igual a 5", () => {
    expect(calc(divi, 10, 2)).toBe(5);
  });

  test("deve receber uma divisao por zero e retornar ArithmeticException",()=>{
    expect(calc(divi, 10, 0)).toBe("ArithmeticException");
  })
});
