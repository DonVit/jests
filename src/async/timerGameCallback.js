'use strict';

function timerGameCallback(callback) {
  setTimeout(() => {
    callback && callback('data');
  }, 1000);
}

module.exports = timerGameCallback;