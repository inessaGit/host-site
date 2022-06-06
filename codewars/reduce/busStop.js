/*
https://www.codewars.com/kata/5648b12ce68d9daa6b000099/solutions/javascript

(number([[10,0],[3,5],[5,8]]),5);
    assert.strictEqual(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
    assert.strictEqual(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
    assert.strictEqual(number([[0,0]]),0);

Array.reduce: 

previousValue: the value resulting from the previous call to callbackFn. 
On first call, initialValue if specified, otherwise the value of array[0].

currentValue: the value of the current element. 
On first call, if an initialValue was specified the value of array[0] 
, otherwise the value of array[1].

Initial value =0 
pv = 0, cv = arr[0]
*/
const number2 = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
const number1 = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)
var number = function(busStops){
    let res = busStops.reduce((pv,cv)=> {
      return pv+cv[0]-cv[1];
    },0)
    return res; 
  }

  number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) ;//exp 17

  