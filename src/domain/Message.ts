import { assertNotBlank } from './Assert';

export class Message {
  private readonly message: string;

  private constructor(message: string) {
    assertNotBlank('Message', message);

    this.message = message.trim();
  }

  static of(message: string): Message {
    return new Message(message);
  }

  get(): string {
    return this.message;
  }
}
