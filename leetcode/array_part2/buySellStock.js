/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

Approach: similar to Kadane algorithm
 - when sequence is strictly decreasing return maxProfit=0
 - otherwise find minPrice =1 and search for maxPrice from the indexof min price

 Runtime: 97 ms, faster than 69.64% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 51.6 MB, less than 73.05% of JavaScript online submissions for Best Time to Buy and Sell Stock.

But maybe should use only one loop 
 */
var maxProfit = function(prices) {
    let isDecreasing =false; 
    let n = prices.length; 
    let minPrice=Number.POSITIVE_INFINITY; 
    let maxProfit =0; 
    
    for(let i=0;i<n;i++){
     prices[i]>prices[i+1] ? isDecreasing=true :isDecreasing=false;
    }
    if(isDecreasing==true) return maxProfit;
    
   
    for (let i=0;i<n;i++){
        minPrice=Math.min(prices[i],minPrice);
        if (i<n-1) //need to handle last element to avoid NaN for [i+1]
        {  
            maxProfit= Math.max(maxProfit,prices[i+1]-minPrice);
        }
       // console.log( `minPrice=${minPrice}`)
       // console.log( `maxProfit=${maxProfit}`)
    }
    
    return maxProfit;
};