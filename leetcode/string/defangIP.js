/*
https://leetcode.com/problems/defanging-an-ip-address/submissions/
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".
*/


var defangIPaddr = function(address) {
    let regexp=/\./g;
    address=address.replace(regexp,"[.]");
    return address;
};

var defangIPaddr1 = function(address) {
    return address.split('.').join('[.]');
    };

//without using built in replace() function 
    var defangIPaddr3 = function(address) {
        var result="";
        for(var i=0;i<address.length;i++) {
            if(address[i] === ".")
                result += "[.]";
            else
                result += address[i];
        }
        
        return result;    
    };