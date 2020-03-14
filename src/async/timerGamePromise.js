export const timerGamePromise = action => new Promise((resolve, reject) => {
  let wait = setTimeout(() => {
    clearTimeout(wait);
    action=='reject'? reject('Promise Reject') : resolve('Promise Resolve');
  }, 200)
})
