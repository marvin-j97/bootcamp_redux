import ava from "ava";
import { Token, tokenize } from "../src/task08_lexer";

const fixture: [string, Token[]][] = [
  ["", []],
  ["     ", []],
  ["a", [new Token("a", "word")]],
  ["asd", [new Token("asd", "word")]],

  ["  asd 123  ", [new Token("asd", "word"), new Token("123", "integer")]],
  ["  asd 123 ", [new Token("asd", "word"), new Token("123", "integer")]],
  ["  asd     123 ", [new Token("asd", "word"), new Token("123", "integer")]],

  ["asd 123", [new Token("asd", "word"), new Token("123", "integer")]],
  [
    "asd 123 asd",
    [
      new Token("asd", "word"),
      new Token("123", "integer"),
      new Token("asd", "word"),
    ],
  ],
  ["1", [new Token("1", "integer")]],
  [
    "1 2 3 4",
    [
      new Token("1", "integer"),
      new Token("2", "integer"),
      new Token("3", "integer"),
      new Token("4", "integer"),
    ],
  ],
];

fixture.forEach(([str, expected], i) => {
  ava.skip(`[${i}] Should tokenize ${JSON.stringify(str)}`, (t) => {
    t.deepEqual(tokenize(str), expected);
  });
});

ava.skip("[1] Should throw", (t) => {
  t.throws(() => tokenize("asd 123asd"));
});

ava.skip("[2] Should throw", (t) => {
  t.throws(() => tokenize("asd 123 $"));
});

ava.skip("[3] Should throw", (t) => {
  t.throws(() => tokenize("!"));
});
