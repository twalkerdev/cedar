import { Stack } from 'src/ds/stack';
import mergeStrings from './array-string/merge-strings';

const s = new Stack();
s.add(42);
s.add('thirty four');
s.add('Nice');

// console.log(s.stackItems)

const test1 = { word1: 'abc', word2: 'pqr' };
const test2 = { word1: 'ab', word2: 'pqrs' };
const test3 = { word1: 'abcd', word2: 'pq' };
console.log(mergeStrings(test1.word1, test1.word2));
console.log(mergeStrings(test2.word1, test2.word2));
console.log(mergeStrings(test3.word1, test3.word2));
