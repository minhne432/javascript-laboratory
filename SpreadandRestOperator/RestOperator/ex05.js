// function logger([a, b, c, d]) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
// }

// logger([1, 2, 3, 4]);

function logger([a, b, c, d, ...rest]) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(rest);
}

logger([1, 2, 3, 4, 5, 6]);
