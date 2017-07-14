
/* eslint spaced-comment: 0 */
/* eslint no-redeclare: 0 */
/* eslint no-unused-vars: 0 */

const assert = require('chai').assert;

/// title: Problem 2: Even Fibonacci numbers
/// type: project-euler

/// categories:
/// math

/// difficulty: ?

/// benchmark:
//replaceWithActualFunctionHere;

/// description:
/// <div class="euler"><p class="euler__paragraph">Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:</p>
/// <p class="euler__paragraph">1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...</p>
/// <p class="euler__paragraph">By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.</p></div>

/// challengeSeed:
function euler2() {
  // Good luck!
  return true;
}

euler2();

/// solutions:
function euler2() {
  let fib1 = 1;
  let fib2 = 1;
  let result = 0;
  let sum = 0;

  while (result < 4000000) {
    if (result % 2 === 0) {
      sum += result;
    }

    result = fib1 + fib2;
    fib1 = fib2;
    fib2 = result;
  }

  return sum;
}

/// tail:
const replaceThis = 3;

/// tests:
assert(typeof euler2 === 'function', 'message: <code>euler2()</code> is a function.');
assert.strictEqual(euler2(), 4613732, 'message: <code>euler2()</code> should return 4613732.');
/// id: 5900f36e1000cf542c50fe81
