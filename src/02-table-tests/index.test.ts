// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 54, b: 35, action: Action.Add, expected: 89 },
  { a: 54, b: 35, action: Action.Subtract, expected: 19 },
  { a: 12, b: 4, action: Action.Multiply, expected: 48 },
  { a: 54, b: 3, action: Action.Divide, expected: 18 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 54, b: 35, action: 'notAction', expected: null },
  { a: 54, b: 'qwerty', action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  it.each(testCases)(
    'should calculate two numbers',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({
        a: a,
        b: b,
        action: action,
      });
      expect(result).toBe(expected);
    },
  );
});
