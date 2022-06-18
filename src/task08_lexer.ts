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

  const tokens: Token[] = [];

  for (const c of str) {
    console.log(c);
  }

  return tokens;
}
