import { Anime } from './Anime';
import { Author } from './Author';
import { Message } from './Message';

export interface Quote {
  message: Message;
  author: Author;
  anime: Anime;
}
