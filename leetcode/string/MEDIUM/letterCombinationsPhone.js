/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/

flatMap((currentValue) => {  } )
flatMap((currentValue, index) => { / } )
flatMap((currentValue, index, array) => { // } )
*/

var letterCombinations = function(digits) {
    let map=new Map();
       map.set("2",["a","b","c"]);
       map.set("3",["d","e","f"]);
       map.set("4",["g","h","i"]);
       map.set("5",["j","k","l"]);
       map.set("6",["m","n","o"]);
       map.set("7",["p","q","r","s"]);
       map.set("8",["t","u","v"]);
       map.set("9",["w","x","y","z"]);
       
       if (digits=="") return [];
       if (digits.length==1) return map.get(digits);
       let arr =[];
       let res =[];
       for (let el of digits){
          arr.push(map.get(el));
   }  
   console.log(arr); //[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

   //    console.log(a.flatMap(el => b.map(el2 => el + el2)))
   res = arr.flatMap((innerArray,i)=> {
    return  innerArray.map((el)=>{
         return el;
     })

   });
      console.log(res)
   
   };
// exp ["ad","ae","af","bd","be","bf","cd","ce","cf"]
   //how to exclude self from combinations ? 
   letterCombinations("23");