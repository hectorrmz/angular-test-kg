export interface ApiResponse<T> {
  quoteResponse: QuoteResponse<T>;
}

interface QuoteResponse<T> {
  error: string;
  result: T;
}
