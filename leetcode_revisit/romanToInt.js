/**
 *
 * 
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.


 [ 'L', 'V', 'I', 'I', 'I' ]
Actual: 62
Expected: 58 

 */

/**
 * @param {string} s
 * @return {number}
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

IV -4 
IX -9 

"MCMXCIV"
Output:2216
Expected:1994
 */

var romanToInt = function(s) {
    const map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let sum = 0;

    for(let i = 0; i < s.length; i++) {
        const curr = map[s[i]], next = map[s[i+1]];
        if(curr < next) sum -= curr;
        else sum += curr;
    }
    return sum;    
};

var romanToInt2 = function(s) {
    let map = new Map(); 
    map.set("I",1)
     map.set("V",5)
     map.set("X",10)
     map.set("L",50)
     map.set("C",100)
     map.set("D",500)
     map.set("M",1000)

    let res = s.split('');
    console.log(res)
    let sum =0; 
    for (let i =0;i<res.length; i++ ){
       if (res[i]=="I"){
       res[i+1]== "V" ? (sum+=4, i++) : res[i+1]== 'X' ? (sum+=9, i++) : sum+=map.get(res[i]);
       }
       else if (res[i]=="X"){
        res[i+1]== "L" ? (sum+=40,i++) : res[i+1]== 'C' ? (sum+=90,i++) : sum+=map.get(res[i]);

       }
       else if (res[i]=="C"){
        res[i+1]== "D" ? (sum+=400,i++) : res[i+1]== 'M' ? (sum+=900,i++) : sum+=map.get(res[i]);
       }
        else 
       sum+=map.get(res[i]);
       console.log (sum)
   }
    
    console.log(sum)
    return sum;
};
//romanToInt("LVIII");
romanToInt("MCMXCIV") //exp 1994 

