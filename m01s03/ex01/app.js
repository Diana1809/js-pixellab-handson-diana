var object = {
  name: 'Diana',
  surname: 'Costache',
  age: 24,
  petOwner: false,
};

console.warn(`

`);

console.log(object.name);
console.log(object.age.toString());

console.warn(`

`);

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);

console.warn(`

`);

console.log((2022 - object.age).toString());
