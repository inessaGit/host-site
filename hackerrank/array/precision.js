/*
https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a new l
ine with  places after the decimal.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
*/

function plusMinus(arr) {
 let pos =0 ;
 let neg = 0;
 let zero =0;
 
 for (let el of arr){
     el>0 ? pos++ : el<0 ? neg++ : el==0 ? zero++ : zero=0;
 }
  let n=arr.length;
  let pos_ratio=(pos/n).toFixed(6);
  let neg_ratio=(neg/n).toFixed(6);
  let zero_ratio=(zero/n).toFixed(6);
  console.log(pos_ratio);
  console.log(neg_ratio);
  console.log(zero_ratio);

}