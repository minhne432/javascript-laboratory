const ages = [3, 10, 18, 20];

const idNumberBiggerThan18 = ages.findIndex((age) => {
  return age > 18;
});

console.log(idNumberBiggerThan18);
