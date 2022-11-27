var object = {
  name: 'Diana',
  surname: 'Costache',
  age: 24,
  petOwner: false,
  carOwner: true,
};

console.warn(`

`);

console.log(object.name);
console.log(object.age.toString());

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);

console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);

console.log(object.name + ' s-a nascut in 1998.');

console.log((2022 - object.age).toString());
