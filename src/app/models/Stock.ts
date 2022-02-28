export interface Stock {
  ask: number;
  askSize: number;
  averageAnalystRating: string;
  averageDailyVolume3Month: number;
  averageDailyVolume10Day: number;
  bid: number;
  bidSize: number;
  bookValue: number;
  currency: string;
  customPriceAlertConfidence: string;
  displayName: string;
  earningsTimestamp: number;
  earningsTimestampEnd: number;
  earningsTimestampStart: number;
  epsCurrentYear: number;
  epsForward: number;
  epsTrailingTwelveMonths: number;
  esgPopulated: boolean;
  exchange: string;
  exchangeDataDelayedBy: number;
  exchangeTimezoneName: string;
  exchangeTimezoneShortName: string;
  fiftyDayAverage: number;
  fiftyDayAverageChange: number;
  fiftyDayAverageChangePercent: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekHighChange: number;
  fiftyTwoWeekHighChangePercent: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekLowChange: number;
  fiftyTwoWeekLowChangePercent: number;
  fiftyTwoWeekRange: string;
  financialCurrency: number;
  firstTradeDateMilliseconds: number;
  forwardPE: number;
  fullExchangeName: string;
  gmtOffSetMilliseconds: number;
  language: string;
  longName: string;
  market: string;
  marketCap: number;
  marketState: string;
  messageBoardId: string;
  pageViewGrowthWeekly: number;
  postMarketChange: number;
  postMarketChangePercent: number;
  postMarketPrice: number;
  postMarketTime: number;
  priceEpsCurrentYear: number;
  priceHint: number;
  priceToBook: number;
  quoteSourceName: string;
  quoteType: string;
  region: string;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketDayHigh: number;
  regularMarketDayLow: number;
  regularMarketDayRange: string;
  regularMarketOpen: number;
  regularMarketPreviousClose: number;
  regularMarketPrice: number;
  regularMarketTime: number;
  regularMarketVolume: number;
  sharesOutstanding: number;
  shortName: string;
  sourceInterval: number;
  symbol: string;
  tradeable: boolean;
  trailingAnnualDividendRate: number;
  trailingAnnualDividendYield: number;
  trailingPE: number;
  triggerable: boolean;
  twoHundredDayAverage: number;
  twoHundredDayAverageChange: number;
  twoHundredDayAverageChangePercent: number;
}
