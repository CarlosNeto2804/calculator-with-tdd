const { operations, calc } = require("./caclculator/calc.service");
const { validate } = require("./validator/validator.service");

const operation = process.env.OPERATION;
const A = process.env.A;
const B = process.env.B;

const errors = validate({ operation, A, B });

if (errors.length > 0) {
  for (const err of errors) {
    console.log("[ERROR]--> " + err)
  }
  process.exit(1)
}

const method = operations.find((op) => op.name == operation).method;
console.log(calc(method, parseFloat(A), parseFloat(B)));
process.exit(0)

