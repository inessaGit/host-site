/*

https://leetcode.com/problems/student-attendance-record-i/
 total string has less than 2 A 
 AND 
 consec L less than 3

 public boolean checkRecord(String s) {
    return !s.contains("LLL") && (s.indexOf("A") == s.lastIndexOf("A"));
}
*/

var checkRecord1 = function(s) {
    return !s.includes("LLL") && (s.indexOf("A")==s.lastIndexOf("A"));
}

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