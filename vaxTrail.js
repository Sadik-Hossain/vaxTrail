const vaxTrail = (arr) => {
  let A = [];
  let B = [];
  let C = [];
  let D = [];

  for (obj of arr) {
    console.log(obj);
  }

  return {
    A,
    B,
    C,
    D,
  };
};

console.log(
  vaxTrail([
    { name: "sunil", age: 21, temperature: 98 },
    { name: "Biplap", age: 22, temperature: 98 },
  ])
);
