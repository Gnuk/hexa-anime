import { assertNotBlank } from './Assert';

export class Anime {
  private readonly name: string;

  private constructor(name: string) {
    assertNotBlank('Anime', name);

    this.name = name.trim();
  }

  static of(name: string): Anime {
    return new Anime(name);
  }

  get(): string {
    return this.name;
  }
}
