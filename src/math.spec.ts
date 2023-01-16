import { sum, power } from './math';

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
});
