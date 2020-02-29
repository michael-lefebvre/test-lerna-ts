import { intersection, difference, union, findLast } from './array';

describe('array', () => {
  it('intersection, it will yield [2,3]', () => {
    expect(intersection([1, 2, 3], [2, 3])).toEqual([2, 3]);
    expect(intersection([1, 2, 3], [2, 3, 5])).toEqual([2, 3]);
  });
  it('difference, it will yield [1]', () => {
    expect(difference([1, 2, 3], [2, 3])).toEqual([1]);
    expect(difference([1, 2, 3], [2, 3, 5])).toEqual([1]);
  });
  it('union, it will yield [1] and [1,5]', () => {
    expect(union([1, 2, 3], [2, 3])).toEqual([1]);
    expect(union([1, 2, 3], [2, 3, 5])).toEqual([1, 5]);
  });
  it('returns undefined or the last element of an array', () => {
    expect(findLast([1, 2, 3])).toEqual(3);
    expect(findLast([1, 'a', null, [1, '2']])).toEqual([1, '2']);
    const wrong: any = null;
    expect(findLast(wrong)).toBeUndefined();
  });
});
