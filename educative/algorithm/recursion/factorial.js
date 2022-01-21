/*
https://www.educative.io/courses/visual-introduction-to-algorithms/j5NQB
Your code should use a for loop to compute the product 1 * 2 * 3 * ... * n

Recursion: n!=n* (n-1)!
we can compute n! by computing (n−1)! and then multiplying the result of computing (n−1)! by n.

If n = 0, then declare that n! = 1.
Otherwise, n must be positive. 
Solve the subproblem of computing (n−1)!, multiply this result by n, 
and declare n! equal to the result of this product.

We call the first case, where we immediately know the answer, the base case,
 and we call the second case, where we have to compute the same function but on a different value, 
 the recursive case.
*/

var factorial = function(n) {
    var result = 1;
    let num=n;
    // Implement this function. n=3 
    for (let i=1;i<=num;i++){
      result *=n;
      n--;
    }
    
    return result;
  };
  
  var factorialRecurse = function(n) {
    // base case: 
    
    // recursive case:
    
    return undefined
  };
    
  