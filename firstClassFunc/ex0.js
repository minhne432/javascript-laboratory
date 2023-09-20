const Arimetics = {
  add: (a, b) => {
    return `${a} + ${b} = ${a + b}`;
  },
  subjract: (a, b) => {
    return `${a} - ${b} = ${a - b}`;
  },
  mutiply: (a, b) => {
    return `${a} * ${b} = ${a * b}`;
  },
  division: (a, b) => {
    if (b != 0) return `${a}/${b} = ${a / b}`;
    return `cannot divide by zero!!!`;
  },
};

const arr = [];
arr.push(Arimetics.add(100, 100));
arr.push(Arimetics.subjract(100, 50));
arr.push(Arimetics.mutiply(2, 4));
arr.push(Arimetics.division(5, 2));

console.log(arr);
