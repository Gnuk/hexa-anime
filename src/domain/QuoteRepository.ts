import { Quote } from './Quote';

export interface QuoteRepository {
  get(): Promise<Quote>;
}
