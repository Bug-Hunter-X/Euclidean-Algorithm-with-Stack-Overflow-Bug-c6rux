function foo(a, b) {
  if (b === 0) {
    return a;
  }
  return foo(b, a % b);
}

console.log(foo(10, 2)); // Output: 2
console.log(foo(10, 5)); // Output: 5
console.log(foo(15, 5)); // Output: 5
console.log(foo(12, 18)); // Output: 6