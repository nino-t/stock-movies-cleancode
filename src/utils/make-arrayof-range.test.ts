import makeArrayOfRange from './make-arrayof-range';

describe("make-arrayof-range utils", () => {
  it('created array of numbers it\'s OK', () => {
    const results = makeArrayOfRange(1, 10);

    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBe(10);
  });

  it('created array of numbers with args of step setted to 2 it\'s OK', () => {
    const results = makeArrayOfRange(1, 10, 2);
    
    expect(results.length).toBe(5);
    expect(results.join('_')).toBe([1,3,5,7,9].join('_'));
  });
});  