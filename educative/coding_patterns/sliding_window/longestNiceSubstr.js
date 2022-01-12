
/**
 * @param {string} s
 * @return {string}
 
https://leetcode.com/problems/longest-nice-substring/

 -sliding window 
 j=0 //windowStart 
 i =0 windowEnd 
 = if s[j]!=s[i] then el are not same => slide window j++; 
  if s[j]===s[i] then push them to chars [] do not slide 
 let 
 let reg = new RegExp(ch,'i')
 */

 let s ="ZYazaAay";
let ch =s[0];
//let  reg = new RegExp(s[3],'i').test('Z'); //true 
let  reg = new RegExp(s[3],'i').test(`${s[0]}`); //true 

console.log(reg);

 var longestNiceSubstring = function(s) {
    let chars =[];
    let n= s.length;
    let j =0; //windowStart 
    //let reg = new RegExp(); 
    
    if (s.length===1) return "";
    
    //i represents windowEnd
    for (let i=0;i<n;i++){
        chars+=s[i];
        //min should be two ; 2-1 =1 since index 0 based
        
    if (i>=1){
           let   reg = new RegExp(s[j],'i');
        if (reg.test(`${s[i]}`)===false){
            chars.shift(); //remove char from the beginning 
            j++; //slide  window
           }
        
        else {
            chars.push(s[i]); //do not slide 
        }
        }
        
    }
}

console.log(longestNiceSubstring(s));