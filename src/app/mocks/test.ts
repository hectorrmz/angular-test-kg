import { of } from 'rxjs';

export const spyRouter = {
  navigate: jasmine.createSpy(),
};

export const spyStockService = {
  getStocks: jasmine
    .createSpy()
    .and.returnValue(of({ quoteResponse: { result: [] } })),
};

export const spyStockGroupService = {
  getAll: jasmine.createSpy().and.returnValue(of([])),
  remove: jasmine.createSpy(),
  add: jasmine.createSpy(),
};

export const spySessionStorage = {
  setItem: jasmine.createSpy(),
} as any;
