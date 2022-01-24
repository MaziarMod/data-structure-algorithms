// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

function fib1(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  const fibArray = [0, 1, 1];
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i] + fibArray[i - 1]);
  }
  return fibArray[fibArray.length - 1];
}

function fib2(n) {
  const fibArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray[n];
}

module.exports = fib;
