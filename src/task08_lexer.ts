type TokenType = "integer" | "word";

export class Token {
  value: string;
  type: TokenType;

  constructor(value: string, type: TokenType) {
    this.value = value;
    this.type = type;
  }
}

/**
 * Converts a string into a list of tokens, either integers or words
 * integers should be a sequence of digits, and words should consist of a-z and A-Z
 *
 * If the string is invalid, an error should be thrown
 */
export function tokenize(str: string): Token[] {
  const tokens: Token[] = [];

  let buffer = "";
  let current: TokenType | null = null;

  function processBuffer() {
    if (buffer.length && current) {
      tokens.push(new Token(buffer, current));
      buffer = "";
      current = null;
    }
  }

  for (const c of str) {
    if (c === " ") {
      processBuffer();
      continue;
    }
    if (/\d/.test(c)) {
      if (current === "word") {
        throw new Error(`Invalid character: ${c}`);
      } else {
        buffer += c;
        current = "integer";
      }
    } else if (/[a-z]/i.test(c)) {
      if (current === "integer") {
        throw new Error(`Invalid character: ${c}`);
      } else {
        buffer += c;
        current = "word";
      }
    } else {
      throw new Error(`Invalid character: ${c}`);
    }
  }

  processBuffer();

  return tokens;
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

import moo from "moo";

/**
 * Same as tokenize, but using moo
 *
 * https://github.com/no-context/moo
 */
export function tokenizeMoo(str: string): Token[] {
  let lexer = moo.compile({
    word: /[a-zA-Z]+/,
    integer: /[\d]+/,
    WS: / +/,
  });
  lexer.reset(str);
  return Array.from(lexer)
    .filter((x) => x.type === "word" || x.type === "integer")
    .map(({ type, value }) => new Token(value, type as TokenType));
}
