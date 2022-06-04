/*https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

Notes: 
- when trying to push into res array n num of times it does not work  correctly becuase e.g 
n =3 but in the original array 1 was only 2 times then res should have 1 two times not three times ;
- need to preserve order e.g [1,3,1,4,1] n =2 so it should be [1,3,1,4] cannot be [1,1,3,4]

Array of strings to array of numbers 
// A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number); // [1, 2, 3]

Array of numbers to array of strings 
[1,2,3].map(String);

That ~~ is a double NOT bitwise operator.
It is used as a faster substitute for Math.floor() for positive numbers.
*/

const deleteNth = (arr, n) => {
  let obj = {}; //object 
  let res = arr.filter( el => (obj[el] = obj[el]+1||1) <= n );
  console.log(obj) //{ '20': 2, '21': 1, '37': 1 }
  console.log(res)
  return res;
}


function deleteNth1(arr,n){
    let map  = new Map();
    let res=arr.filter((el)=>{
      map.set(el,map.has(el)?map.get(el)+1:1); //Map(3) { 20 => 2, 37 => 1, 21 => 1 };  res1=20,37,21
      return map.get(el)<=n ;
    }); 
    console.log(map)
    console.log(`res1=${res}`)
    return res ;
  }

  function deleteNth2(arr,n){
    //Approach: store freq in map 2. filter out arr based on the map.values<=n
    let map = new Map();
    for(let el of arr){
      map.set(el,map.has(el)? map.get(el)+1:1);
    }
   console.log(map);// Map(3) { 20 => 2, 37 => 1, 21 => 1 } ; res2=37,21
    let res = arr.filter((el)=>{ return map.get(el)<=n});
    console.log(`res2=${res}`);
    return res; 
  }
let n =[1,2,3]
//deleteNth([20,37,20,21], 1) ;//exp [20,37,21]

deleteNth1([20,37,20,21], 1) ;//exp [20,37,21]
deleteNth2([20,37,20,21], 1) ;//exp [20,37,21]

//deleteNth1([1,1,3,3,7,2,2,2,2], 3); //exp  [1, 1, 3, 3, 7, 2, 2, 2])
