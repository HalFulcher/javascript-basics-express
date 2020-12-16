const express = require('express');
const e = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
} = require('./lib/arrays');

const app = express();
app.use(express.json());

// STRINGS

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

// returns the uppercased string

app.get('/strings/upper/:hello', (req, res) => {
  res.json({ result: uppercase(req.params.hello) });
});

// returns the lowercased string

app.get('/strings/lower/:HELLO', (req, res) => {
  res.json({ result: lowercase(req.params.HELLO) });
});

// returns the first character of the string when there is no query string

app.get('/strings/first-characters/:string', (req, res) => {
  if (!req.query.length) {
    res.json({ result: firstCharacter(req.params.string) });
  } else {
    res.json({ result: firstCharacters(req.params.string, req.query.length) });
  }
});

// NUMBERS

// adds

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: `Parameters must be valid numbers.` });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

// subtracts

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: `Parameters must be valid numbers.` });
  } else {
    res.status(200).json({ result: subtract(b, a) });
  }
});

// Multiplies

app.post('/numbers/multiply', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: `Parameters "a" and "b" are required.` });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: `Parameters "a" and "b" must be valid numbers.` });
  } else {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  }
});

// Divides

app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (
    // errors if dividing by 0
    req.body.a &&
    req.body.b === 0
  ) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }

  if (req.body.a === 0 && req.body.b) {
    res.status(200).json({ result: divide(a, b) });
  }

  // errors if parameters are missing
  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: `Parameters "a" and "b" are required.` });
  }
  // then errors if parameters are not numbers
  else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: `Parameters "a" and "b" must be valid numbers.` });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
});

// Remainder

app.post('/numbers/remainder', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (
    // errors if dividing by 0
    req.body.a &&
    req.body.b === 0
  ) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }

  if (req.body.a === 0 && req.body.b) {
    res.status(200).json({ result: remainder(a, b) });
  }

  // errors if parameters are missing
  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: `Parameters "a" and "b" are required.` });
  }
  // then errors if parameters are not numbers
  else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: `Parameters must be valid numbers.` });
  } else {
    res.status(200).json({ result: remainder(a, b) });
  }
});

// BOOLEANS

app.post('/booleans/negate', (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
});

// truthiness

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
});

// is odd number

app.get('/booleans/is-odd/:number', (req, res) => {
  const n = parseInt(req.params.number, 10);

  if (Number.isNaN(n)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).send({ result: isOdd(req.params.number) });
  }
});

// start-with

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  const { string, character } = req.params;

  if (character.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
    res.status(200).send({ result: startsWith(character, string) });
  }
});

// ARRAYS

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.json({ result: getNthElement(req.params.index, req.body.array) });
});

// returns the stringified array

app.post('/arrays/to-string', (req, res) => {
  res.status(200).send({ result: arrayToCSVString(req.body.array) });
});

// returns an array with value appended

app.post('/arrays/append', (req, res) => {
  res.status(200).send({ result: addToArray(req.body.value, req.body.array) });
});

// starts with vowel

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).send({ result: elementsStartingWithAVowel(req.body.array) });
});

// returns an array with the first element removed

app.post('/arrays/remove-element', (req, res) => {
  res.status(200).send({ result: (req.params.index, req.body.array) });
});

// app.post('/arrays/remove-element', (req, res) => {});

module.exports = app;
