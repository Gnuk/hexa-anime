import { assertNotBlank } from './Assert';

const DASH = '-';

const SPACE = ' ';

const SPLITTER = /[ \t\n]+/;

const capitalize = (word: string): string => `${word.charAt(0).toUpperCase()}${word.substring(1).toLowerCase()}`;

const normalizeWord = (word: string): string => word.split(DASH).map(capitalize).join(DASH);

const normalize = (fullname: string): string => fullname.trim().split(SPLITTER).map(normalizeWord).join(SPACE);

export class Author {
  private readonly fullname: string;

  private constructor(fullname: string) {
    assertNotBlank('Author', fullname);

    this.fullname = normalize(fullname);
  }

  static of(fullname: string): Author {
    return new Author(fullname);
  }

  get(): string {
    return this.fullname;
  }
}
