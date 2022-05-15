/*

https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Constraints:
1 <= n <= 10^5

*/

var subtractProductAndSum = function(n) {
    
    let product=1;
    let sum =0;
    let num =n.toString().split('');
    console.log(num)

    for (let el of num){
        let digit=parseInt(el);
        product*=digit;
        sum+=digit;
    }
    console.log(`product=${product} sum=${sum} product-sum=${product-sum}`)
    return product-sum;
};

subtractProductAndSum(4421);//exp 21