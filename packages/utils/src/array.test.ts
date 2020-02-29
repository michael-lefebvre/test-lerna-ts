import {
  intersection,
  difference,
  union,
  findLast,
  arrayMove,
  arraysMatch,
} from './array';

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
    // eslint-disable-next-line
    const wrong: any = null;
    expect(findLast(wrong)).toBeUndefined();
  });
  it('reorder array as expected', () => {
    const fixture = [1, 2, 3, 4, 5];
    expect(arrayMove(fixture, 3, 0)).toEqual([4, 1, 2, 3, 5]);
    expect(arrayMove(fixture, -1, 0)).toEqual([5, 1, 2, 3, 4]);
    expect(arrayMove(fixture, 1, -2)).toEqual([1, 3, 4, 2, 5]);
    expect(arrayMove(fixture, -3, -4)).toEqual([1, 3, 2, 4, 5]);
  });
  it('check if arrays are the same', () => {
    const fixture = [1, 2, 3, 4, 5];
    expect(arraysMatch(fixture, [1, 2, 3, 4, 5])).toEqual(true);
    expect(arraysMatch(fixture, [1, 2, 3, 4])).toEqual(false);
    expect(arraysMatch(fixture, [1, 2, 3, 5, 4])).toEqual(false);
    expect(arraysMatch(fixture, ['1', 2, 3, 4, 5])).toEqual(false);
  });
});
