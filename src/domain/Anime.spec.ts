import { Anime } from './Anime';

describe('Anime', () => {
  it('Should not be blank', () => {
    expect(() => Anime.of('\t\n')).toThrow('Anime is blank');
  });

  it('Should normalize', () => {
    expect(Anime.of('\nGrendizer\t').get()).toBe('Grendizer');
  });
});
