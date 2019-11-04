import { isBoolean } from './index';

describe('isBoolean()', () => {
  it('should return true if given value is instance of Boolean', () => {
    expect(isBoolean(new Boolean())).toEqual(true);
  });

  it('should return true if given value is literal true', () => {
    expect(isBoolean(true)).toEqual(true);
  });

  it('should return true if given value is literal false', () => {
    expect(isBoolean(false)).toEqual(true);
  });

  it('should return false if given value is falsy value', () => {
    expect(isBoolean('')).toEqual(false);
    expect(isBoolean(undefined)).toEqual(false);
    expect(isBoolean(null)).toEqual(false);
  });
});
