// https://stackoverflow.com/a/33034768

// For [1,2,3] [2,3] it will yield [2,3].
// On the other hand, for [1,2,3] [2,3,5] will return the same thing.
export function intersection<T>(
  a: ReadonlyArray<T>,
  b: ReadonlyArray<T>,
): ReadonlyArray<T> {
  return a.filter((x) => b.includes(x));
}

// For [1,2,3] [2,3] it will yield [1].
// On the other hand, for [1,2,3] [2,3,5] will return the same thing.
export function difference<T>(
  a: ReadonlyArray<T>,
  b: ReadonlyArray<T>,
): ReadonlyArray<T> {
  return a.filter((x) => !b.includes(x));
}

// symmetric difference,
// This way, we get an array containing all the elements of a that are not in b and vice-versa
export function union<T>(
  a: ReadonlyArray<T>,
  b: ReadonlyArray<T>,
): ReadonlyArray<T> {
  return a
    .filter((x) => !b.includes(x))
    .concat(b.filter((x) => !a.includes(x)));
}

export function findLast<T>(a: T[]): T | undefined {
  const length = !Array.isArray(a) ? 0 : a.length;
  return length ? a[length - 1] : undefined;
}
