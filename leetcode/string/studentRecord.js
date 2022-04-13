/*

https://leetcode.com/problems/student-attendance-record-i/
 total string has less than 2 A 
 AND 
 consec L less than 3
*/

var checkRecord = function(s) {
    let giveAward= false; 
    let wasLate = false; 
    let wasAbsent = false; 
    
    wasLate= s.includes("LLL");
    if (wasLate==false){
    wasAbsent = s.indexOf('A')==s.lastIndexOf('A'); //if false means has at least 2 A
    }
    
   if (wasAbsent==true) giveAward= true; 
    
    return giveAward; 
};

let s="PPALLL";
 console.log(checkRecord(s)); //exp false 