import { timerGamePromise } from './timerGamePromise'

test('Promise Resolve with then', () => {
  return timerGamePromise().then(data => {
    expect(data).toBe('Promise Resolve');
  });
});

test('Promise Reject with catch', () => {
  expect.assertions(1);
  return timerGamePromise('reject').catch(e => expect(e).toMatch('Promise Reject'));
});

test('Promise Resolve', () => {
  return expect(timerGamePromise()).resolves.toBe('Promise Resolve');
});

test('Promise Reject', () => {
  return expect(timerGamePromise('reject')).rejects.toMatch('Promise Reject');
});