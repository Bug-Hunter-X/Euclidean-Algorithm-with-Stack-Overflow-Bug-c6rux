# Euclidean Algorithm with Stack Overflow Bug

This repository demonstrates a common error in recursive functions: stack overflow. The `bug.js` file contains a JavaScript implementation of the Euclidean algorithm that suffers from this error.  The `bugSolution.js` file provides a corrected version.

The bug arises when the recursive calls to the function don't properly handle cases where the second number is larger than the first number. This leads to unbounded recursion, exceeding the call stack limit, and resulting in a stack overflow error.

The solution addresses this issue by ensuring that the recursive calls always reduce the input numbers towards the GCD in a controlled manner. 

This example highlights the importance of handling base cases correctly and preventing unbounded recursion when implementing algorithms recursively.