import { Equal, Expect } from 'type-testing';

// source: https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md

// complexity: 1
// tags: conditional-types, index-accessed, generics-with-constraints, infer, learning-arrays, learning-generics

// For given a tuple, update the `Length` type such that it returns the length.

type Tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type SpaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'];

// type Length<TArray> = TArray extends { length: infer L } ? L : never;
// type Length<T extends { length: unknown }> = T['length'];
type Length<TArray extends any[]> = TArray['length'];

type cases = [Expect<Equal<Length<Tesla>, 4>>, Expect<Equal<Length<SpaceX>, 5>>];
