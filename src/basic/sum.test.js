import {sum} from './sum';

test('sums 1,2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('sums 1,2,3,4 to equal 10', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});