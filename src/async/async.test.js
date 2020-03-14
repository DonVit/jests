import { timerGamePromise } from './timerGamePromise'

test('the data is peanut butter', async () => {
  const data = await timerGamePromise();
  expect(data).toBe('Promise Resolve');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await timerGamePromise('reject');
  } catch (e) {
    expect(e).toMatch('Promise Reject');
  }
});

test('the data is peanut butter', async () => {
  await expect(timerGamePromise()).resolves.toBe('Promise Resolve');
});
