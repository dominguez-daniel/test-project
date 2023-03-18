import { sum, power, evalExpression } from './math';

jest.mock(
  'mathjs',
  () => {
    const originalModule = jest.requireActual('mathjs');
    return {
      __esModule: true,
      ...originalModule,
      evaluate: jest.fn((string) => {
        console.log('Using mock function');
        const nums = string.split('+');
        return nums.reduce((acc: any, el: any) => parseInt(acc) + parseInt(el), 0);
      })
    }
  }
)

describe('Math', () => {
  describe('sum', () => {
    it('should take in n amount of numbers and return the sum', () => {
      // arrange
      const expected = 100;
      const nums = [50, 25, 20, 5];
      // act
      const result = sum(...nums);
      // assert
      expect(result).toEqual(expected);
    });
  });
  
  describe('power', () => {
    it('should take the base to the passed exponent power', () => {
      // arrange
      const expected = 100;
      // act
      const result = power(10, 2);
      // assert
      expect(result).toEqual(expected);
    });
  });

  describe('evalExpression', () => {
    it('should take a string math expression and return the result.', () => {
      // arrange
      const expected = 4
      // act
      const result = evalExpression('2 + 2');
      // assert
      expect(result).toEqual(expected);
    });
  });
});
