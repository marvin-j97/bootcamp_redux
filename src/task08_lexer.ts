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
  // TODO: implement
  // TIP: You may want to use regex to differentiate between words and digits

  const tokens: Token[] = [];

  for (const c of str) {
    console.log(c);
  }

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
    // TODO: implement
  });
  lexer.reset(str);
  return Array.from(lexer)
    .filter((x) => x.type === "word" || x.type === "integer")
    .map(({ type, value }) => new Token(value, type as TokenType));
}
