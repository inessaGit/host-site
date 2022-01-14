/*
https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/1154/
https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/1154/discuss/253279/JavaScript-solution

Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) 
such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
- sort array to get the nearby elements as close to min (to avoid having pairs of large num+small num
- filter out even elements
-reduce el
0%2 ==0 so it is even 
*/

let arrayPairSum = function(nums) {
	return nums
		.sort((a, b) => a - b)
        .filter((x, index) => index % 2 === 0)
        .reduce((a, b) => a + b);        
};

let a=[6,2,6,5,1,2]; //exp 9 sorted [1,2,2,5,6,6  ]
let b =[1,4,3,2] ;//exp 4 filtered [2,4]

console.log(arrayPairSum(a));
//console.log(arrayPairSum(b));

let c =[1,2,4]
let res =c.reduce((a,b)=>a+b); 
console.log(res); //7

const array1=["A","B","C"]
const array2=["1","2","3"]
const array3=["red","blue","green"]

const combine = ([head, ...[headTail, ...tailTail]]) => {
  if (!headTail) return head

  const combined = headTail.reduce((acc, x) => {
    return acc.concat(head.map(h => `${h}${x}`))
  }, [])

  return combine([combined, ...tailTail])
}

//console.log('With your example arrays:', combine([array1, array2]))
//console.log('With N arrays:', combine([array1, array2, array3]))

//================
/*[] initial values empty array 
reduce((previousValue, currentValue, currentIndex, array) => { / ... / }, initialValue)
On the first call: 
- IF initial value specified then prevVal=initial value
- IF initial value specified 
curVal =arr[0]
- IF initial val specified then curIndex=0

Otherwise: 
- prevVal =arr[0]
- curVal=arr[1]
- curIndex=1 

In the example below: 
- initial value specified. It is an empty array. So previous value=[];
- current value =array1[0]=A
- take each el of array2 and map it to be currValue from array1 + element from array2

[
  'A1', 'A2', 'A3',
  'B1', 'B2', 'B3',
  'C1', 'C2', 'C3'
]
*/
var result = array1.reduce( (a, v) =>
    [...array2.map(x=>v+x)],
[]);
console.log(result);
/*---------OR--------------*/
var result1 = array1.reduce( (a, v, i) =>
    a.concat(array2.map( w => v + w )),
[]);
//console.log(result1);

/*
REDUCE
[
  'A',  'B1', 'B2',
  'B3', 'C1', 'C2',
  'C3'
]
*/
console.log('REDUCE') //a prev val , v cur val
let t =array1.reduce((a,v)=>[...a,...array2.map(x=>v+x)]);
console.log(t)

