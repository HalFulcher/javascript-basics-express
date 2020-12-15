// THIS FIRST ONE IS WRONG

const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(a => a.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string =>
    string
      .split('')
      .reverse()
      .join(''),
  );
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const array2 = [...array];

  array2.splice(index, 1);

  return array2;
};

const elementsStartingWithAVowel = strings => {
  const rex = /^[aeiou]/i;
  return strings.filter(str => rex.test(str));
};

const removeSpaces = string => {
  return string.replace(/ /g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce(function(a, b) {
    return a + b;
  });
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
