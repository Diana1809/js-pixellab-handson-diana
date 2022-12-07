var person = {
  firstName: 'Diana',
  lastName: 'Costache',
  email: 'diana_costache.adts@yahoo.ro',
  birthYear: 1998,
  pets: [
    {
      name: 'Alvis',
      species: 'Dog',
      age: 6,
    },
    {
      name: 'Lexy',
      species: 'Dog',
      age: 11,
    },
    {
      name: 'Egon',
      species: 'Parrot',
      age: 2,
    },
  ],
  zipCode: '123456',
};

var cat = {
  petName: 'Alvis',
};

var difference = {
  difference: 18,
};

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.log((2022 - person.pets[2].age).toString());

console.log((2022 - person.birthYear - person.pets[0].age).toString());

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    cat.petName +
    ' este o diferenta de ' +
    difference.difference +
    ' ani.',
);

console.log(
  person.firstName +
    ', ' +
    person.pets[0].name +
    ', ' +
    person.pets[1].name +
    ', ' +
    person.pets[2].name +
    ' locuiesc toti in aceeasi casa.',
);

console.log((person.pets[0].age - person.pets[2].age).toString());

console.log(
  'Ma numesc ' +
    person.firstName +
    ' ' +
    person.lastName +
    ', ' +
    'm-am nascut in ' +
    person.birthYear +
    ' si codul meu postal este: ' +
    person.zipCode,
);

console.log(
  'Animalele mele s-au nascut in ' +
    (2022 - person.pets[0].age).toString() +
    ', ' +
    (2022 - person.pets[1].age).toString() +
    ', ' +
    'respectiv ' +
    (2022 - person.pets[2].age).toString() +
    '.',
);
