const ages = [3, 10, 18, 20];

const numberBiggerThan18 = ages.find((age) => {
  return age > 18;
});

console.log(numberBiggerThan18);
