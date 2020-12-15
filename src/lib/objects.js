const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  }
};

const getName = object => {
 return object.name
};

const getProperty = (property, object) => {
return object[property]
};

const hasProperty = (property, object) => {

return object.hasOwnProperty(property)

};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
    else {
      return false;
    }
};

const getAges = people => {

  return people.map(person => person.age)

};

const findByName = (name, people) => {
  return people.find(person => person.name === name)
};

const findHondas = cars => {
return cars.filter(car => car.manufacturer === "Honda")

};

const averageAge = people => {

const map1 = people.map(person => person.age);
const reducer = (accumulator, currentValue) => accumulator + currentValue;
return((map1.reduce(reducer)) / map1.length);

};

const createTalkingPerson = (name, age) => {

const talkingProgram = {
  name: name,
  age: age,
  introduce: person2 => ("Hi " + person2 + ", my name is " + name + " and I am " + age + "!")
}

  return talkingProgram
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
