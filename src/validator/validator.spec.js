const { validate } = require("./validator.service");
describe("Validator tests", () => {
  test("deve  gerar mesagem de erro se a operação não for informado", () => {
    const options = {
      operator: null,
      A: 1,
      B:3
    };
    expect(validate(options)).toEqual(expect.arrayContaining(['the OPERATOR value was not informed']))
  });

  test("deve  gerar mesagem de erro se a variavel A não for informado", () => {
    const options = {
      operator: 'soma',
      A: null,
      B:3
    };
    expect(validate(options)).toEqual(expect.arrayContaining(['the A value was not informed']))
  });

  test("deve  gerar mesagem de erro se a variavel B não for informado", () => {
    const options = {
      operator: 'soma',
        A: 1,
        B: null
    };
    expect(validate(options)).toEqual(expect.arrayContaining(['the B value was not informed']))
  });

  test("não deve gerar mesagem de erro se os valores forem informados", () => {
    const options = {
      operator: 'soma',
        A: 1,
        B: 3
    };
    expect(validate(options)).toEqual(expect.arrayContaining([]))
  });
});
