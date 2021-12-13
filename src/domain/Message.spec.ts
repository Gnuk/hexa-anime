import { Message } from './Message';

describe('Message', () => {
  it('Should not be blank', () => {
    expect(() => Message.of(' \t\n')).toThrow('Message is blank');
  });

  it('Should get', () => {
    expect(Message.of('\tMessage\n').get()).toBe('Message');
  });
});
