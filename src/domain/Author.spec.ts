import { Author } from './Author';

describe('Author', () => {
  it('Should not be blank', () => {
    expect(() => Author.of(' \t\n')).toThrow('Author is blank');
  });

  it('Should normalize author', () => {
    expect(Author.of('\tjean-louis \t AUBERT\n').get()).toBe('Jean-Louis Aubert');
  });
});
