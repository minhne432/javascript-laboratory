function makeAdder(a) {
    return function (b) {
        return a + b;
    }
}

let addAtoB = makeAdder(1);
let result = addAtoB(2);

console.log(typeof (addAtoB));
console.log(typeof (result));
