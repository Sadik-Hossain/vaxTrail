const vaxTrail = (arr) => {
  let A = [];
  let B = [];
  let C = [];
  let D = [];

  for (obj of arr) {
    if (obj.temperature >= 100) {
      D.push(obj);
    } else {
      if (obj.age >= 20 && obj.age <= 30) {
        A.push(obj);
      }
      if (obj.age >= 31 && obj.age <= 40) {
        B.push(obj);
      }
      if (obj.age >= 41 && obj.age <= 50) {
        C.push(obj);
      }
    }
  }
  // Sort each array by even ages
  A.sort((a, b) => (a.age % 2) - (b.age % 2));
  B.sort((a, b) => (a.age % 2) - (b.age % 2));
  C.sort((a, b) => (a.age % 2) - (b.age % 2));
  D.sort((a, b) => (a.age % 2) - (b.age % 2));
  return {
    A,
    B,
    C,
    D,
  };
};

const people = [
  { name: "Biplap", age: 22, temperature: 98 },
  { name: "sunil", age: 21, temperature: 98 },
  { name: "Kabir", age: 36, temperature: 99 },
  { name: "Rahul", age: 37, temperature: 99 },
  { name: "Paul", age: 42, temperature: 98 },
  { name: "Kat", age: 41, temperature: 98 },
  { name: "Nayem", age: 50, temperature: 100 },
  { name: "Sabnaj", age: 51, temperature: 101 },
];

console.log(vaxTrail(people));
