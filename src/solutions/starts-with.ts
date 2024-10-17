import { Expect, Equal } from 'type-testing';

// source: https://typehero.dev/challenge/startswith/solutions/2248

// difficulty: easy
// tags: conditional-types, generics-with-constraints, template-literals

/**
 * Implement StartsWith<T, U> which takes two exact string types and returns
 * whether T starts with U.
 *
 * @example
 * ```
 * type a = StartsWith<'abc', 'ac'> // expected to be false
 * type b = StartsWith<'abc', 'ab'> // expected to be true
 * type c = StartsWith<'abc', 'abcd'> // expected to be false
 * ```
 */

type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false;

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
  Expect<Equal<StartsWith<'', ''>, true>>,
];