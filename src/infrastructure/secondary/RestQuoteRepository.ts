import { Quote } from '../../domain/Quote';
import { QuoteRepository } from '../../domain/QuoteRepository';

export class RestQuoteRepository implements QuoteRepository {
  get(): Promise<Quote> {
    return Promise.reject();
  }
}
