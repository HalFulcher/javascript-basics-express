const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
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

app.get('/strings/first-characters/:');

// returns first character of the string when passed a query parameter

app.get('/strings/first-characters/:sd32fg45', (req, res) => {
  res.json({ result: firstCharacters(req.params.string, req.query.length) });
});

// NUMBERS

// adds

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.sendStatus(400)
    : res.status(200).json({ result: add(a, b) });
});

// subtracts

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  res.status(200).json({ result: subtract(b, a) });
});

// Multiplies

app.post('/numbers/multiply', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  res.status(200).send({ result: multiply(a, b) });
});

// Divides

app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  res.status(200).json({ result: divide(a, b) });
});

// Remainder

app.post('/numbers/remainder', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  res.status(200).json({ result: remainder(a, b) });
});

// BOOLEANS

app.post('/booleans/negate', (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
});

// truthiness

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).send({ result: truthiness(req.body.result) });
});

// is odd number

app.get('/booleans/is-odd/:number', (req, res) => {
  res.status(200).send({ result: isOdd(req.params.number) });
});

// returns true when the string starts with the given character

app.get('/booleans/cat/starts-with/:character', (req, res) => {
  res.status(200).send({ result: startsWith(req.params.character) });
});

// ARRAYS - THIS IS RIGHT, ARRAYS.JS SOLUTION IS WRONG

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.status(200).send({ result: getNthElement(req.body.array) });
});

// returns the stringified array

app.post('/arrays/to-string', (req, res) => {
  res.status(200).send({ result: arrayToCSVString(req.body.array) });
});

// returns an array with value appended

app.post('/arrays/append', (req, res) => {
  res.status(200).send({ result: addToArray(req.body.value) });
});

// starts with vowel

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).send({ result: elementsStartingWithAVowel(req.body.array) });
});

module.exports = app;
