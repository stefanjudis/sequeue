'use strict';



/**
 * handles the queue
 *
 * @param {array<function>} queue list of functions
 */
var sequeue = function(queue) {
  queue = [].concat(queue);
  process.nextTick(function() {
    queue.shift()(sequeue.bind(null, queue));
  });
};

module.exports = sequeue;
