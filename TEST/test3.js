const typeOF = require("../tools/typeOF");
function* generateNumbers() {
  for (let i = 0; i < 10; i++) {
    let a = "s../tools/typeOF";
    yield a;
  }
}

const numbers = generateNumbers();
typeOF(numbers);

for (const number of numbers) {
  console.log(number);
}
