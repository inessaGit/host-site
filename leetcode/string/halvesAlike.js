/*
https://leetcode.com/problems/determine-if-string-halves-are-alike/submissions/

*/

var halvesAreAlike = function(s) {
    let all_count=0;
    let half_count=0;
    let n=s.length/2;
    let a=s.substring(0,n);
    let vowels=['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    for(let i=0;i<s.length;i++){
         if(vowels.includes(s[i])===true){
            all_count++;
         if(vowels.includes(a[i])){
            half_count++;
        }
        }
    }
       
    let alike=false;
    all_count-half_count===half_count? alike= true:alike= false
   // console.log(all_count);
   // console.log(half_count);
    return alike;
};

halvesAreAlike("book")