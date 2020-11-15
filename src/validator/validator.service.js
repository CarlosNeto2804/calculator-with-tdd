const props = ["operation", "A", "B"];

function createMessage(prop = "") {
  return `the ${prop.toUpperCase()} value was not informed`;
}

function validate(options) {
  const errors = [];
  for (const iterator of props) {
    if (!options[iterator]) errors.push(createMessage(iterator))
  }
  return errors;
}

module.exports = { validate };
