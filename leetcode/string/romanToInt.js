/*
https://leetcode.com/problems/roman-to-integer/
*/

var romanToInt = function(s) {
    let reg ={'V':5,'L':50,'D':500,'M':1000};
    let special ={'I':1, 'X':10,'C':100, 'IV':4,'IX':9,'XL':40,'XC':90,'CD':400,'CM':900};
    let ans =0;
    let n=s.length; 
    let double_char='';
    for(let i=0;i<n;i++){
        
        //"M CM XC IV"; //exp 1994 Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
        if (s[i] in special){
           double_char =s[i]+s[i+1];
           //ans+= double_char in special? (special[double_char]):special[s[i]];
           if (double_char in special){
               ans+=special[[double_char]];
               ++i; //incrment i to move pointer (so not double process next char)
           }
           else{
               ans+=special[s[i]];
           }
           //console.log(`special ${ans} i=${i} special[double_char]=${special[double_char]}` ); 

        }
        else{
            ans+=reg[s[i]];
           // console.log(`reg ${ans}`); 

        }
} 
    function convert(char){
        let num =0;
        return num=char in special ? special[char]:reg[char];
    }
    return ans;
};

let s = "LVIII" //exp 58
let s2= "MCMXCIV"; //exp 1994 Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
console.log(romanToInt(s));
console.log(romanToInt(s2));

