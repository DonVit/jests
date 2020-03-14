const timerGame = require('./timerGameCallback')
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('data');
      done();
    } catch (error) {
      done(error);
    }
  }

  timerGame(callback);
});