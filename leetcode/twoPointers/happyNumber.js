/*

https://leetcode.com/problems/happy-number/
https://emre.me/coding-patterns/fast-slow-pointers/
https://www.educative.io/courses/grokking-the-coding-interview/39q3ZWq27jM

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

- fast and slow pointer 
By moving at different speeds, the algorithm proves that the two pointers are bound to meet. 
Instead of keeping track of just one value in the chain, we keep track of 2, 
called the slow runner and the fast runner. 
At each step of the algorithm, the slow runner goes forward by 1 number in the chain, a
nd the fast runner goes forward by 2 numbers (nested calls to the getNext(n) function).
If n is a happy number, i.e. there is no cycle, 
then the fast runner will eventually get to 1 before the slow runner.
If n is not a happy number, then eventually the fast runner and the slow runner 
will be on the same number.

*/

var isHappy = function(n) {
    let slow = n,
        fast = n;
    while (true) {
        slow = find_square_sum(slow); // move one step
        fast = find_square_sum(find_square_sum(fast)); // move two steps
        if (slow === fast) { // found the cycle
            break;
        }
    }
    return slow === 1; // see if the cycle is stuck on the number '1'
};

function find_square_sum(num) {
    let sum = 0;
    while ((num > 0)) {
        digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}


let n = 19; //exp true
let n2= 2; //exp false 
console.log(isHappy(n));