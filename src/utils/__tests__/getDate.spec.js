import { getDate } from "../getDate";

describe('getDate tests', () => {
  it('returns unknown if no data passed', () => {
    const expected = 'unknown';
  
    const received = getDate([]);
    expect(received).toBe(expected);
  });
  
  it('returns first el - till now if one el passed', () => {
    const expected = 'test - till now';
  
    const received = getDate(['test']);
    expect(received).toBe(expected);
  });
});
