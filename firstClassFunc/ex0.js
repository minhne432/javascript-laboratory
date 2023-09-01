const Arimetics = {
    add: (a, b) => {
        return `${a} + ${b} = ${a + b}`
    },
    subjract: (a, b) => {
        return `${a} - ${b} = ${a - b}`
    },
    mutiply: (a, b) => {
        return `${a} * ${b} = ${a * b}`
    },
    division: (a, b) => {
        if (b != 0) return `${a}/${b} = ${a / b}`
        return `cannot divide by zero!!!`
    }
}


console.log(Arimetics.add(100, 100));
console.log(Arimetics.subjract(100, 50));
console.log(Arimetics.mutiply(2, 4));
console.log(Arimetics.division(5, 2));
