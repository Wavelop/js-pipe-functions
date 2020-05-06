const { pipe, voidPipe } = require('../js-pipe-functions');

describe('Function "pipe" test', () => {

  it('Pipe number function: n+2 n*2', () => {
    const n = 1
    const sum = jest.fn(n => n + 2);
    const mul = jest.fn(n => n * 2);

    const result = pipe(
      sum,
      mul,
    )(n);

    expect(sum).toHaveBeenCalledWith(n);
    expect(mul).toHaveBeenCalledWith(n + 2);
    expect(result).toBe((n + 2) * 2);
  });
});

describe('Function "voidPipe" test', () => {
  describe('Pipe number validation: n is odd, n > 10', () => {

    let n;
    let isOdd;
    let gt10;
    let pipe;

    beforeEach(() => {
      n = 11;
      isOdd = jest.fn().mockImplementation((n) => {
        if (n % 2 == 0) {
          throw new Error('number is not odd');
        }
      });

      gt10 = jest.fn((n) => {
        if (n <= 10) {
          throw new Error('number is not grater then 10');
        }
      });

      pipe = voidPipe(
        isOdd,
        gt10,
      );

    })


    it('n = 9 -> Error < 10', () => {
      n = 9;
      expect(() => { pipe(n) }).toThrow();
    });

    it('n = 12 -> Error !odd', () => {
      n = 12;
      expect(() => { pipe(n) }).toThrow();
    });

    it('n = 11 -> OK', () => {
      expect(() => { pipe(n) }).not.toThrow();
    });
  });
});