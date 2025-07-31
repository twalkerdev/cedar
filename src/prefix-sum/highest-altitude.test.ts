import { largestAltitude } from './highest-altitude';

describe('largestAltitude', () => {
  test('should be defined', () => {
    expect(largestAltitude).toBeTruthy();
  });

  test('expect result to equal leet code answer - 1', () => {
    const gain = [-5, 1, 5, 0, -7];
    const ans = 1;
    expect(largestAltitude(gain)).toBe(ans);
  });

  test('expect result to equal leet code answer - 2', () => {
    const gain = [-4, -3, -2, -1, 4, 3, 2];
    const ans = 0;
    expect(largestAltitude(gain)).toBe(ans);
  });
});
