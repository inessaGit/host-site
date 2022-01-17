
 let s = "hello love";
 let charFrequency ={};
let n = s.length; 
let k =2; 
let j=0; //windowStart ; i acts as windowEnd 
//Option 1 
 for (let i=0;i<n;i++){
    let char = s[i];
    if (!(char in charFrequency)){
        //{ h: 0, e: 0, l: 0, o: 0, ' ': 0, i: 0, n: 0, s: 0 }
        charFrequency[char]=0; //store in obj as key: val pair: where val is frequency
       console.log(charFrequency);
    }
   //{ h: 1, e: 2, l: 2, o: 1, ' ': 1, i: 1, n: 1, s: 1 }
    charFrequency[char]+=1;
    console.log(charFrequency);
 }
 //{ h: 1, e: 2, l: 3, o: 2, ' ': 1, v: 1 }
 //console.log(charFrequency);

 console.log(1/0) //infinity 
 var array = [1,2,3,4,5];
 //Declare an answer variable to store the final result
 //The reduce function callback is declared in the declaration
 let answer = array.reduce((prevVal,currValue)=>
 //The callback method must return a value using the required function       
              {return prevVal*currValue;});
 console.log("Answer with no initial value")
 console.log(answer);
 
 