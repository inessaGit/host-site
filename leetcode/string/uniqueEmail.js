/*
https://leetcode.com/problems/unique-email-addresses/

let n = email.length;
        let index =email.indexOf('@');
        let lname =email.slice(0,index);
        let dname = email.slice(index+1,n);
        console.log(`lname=${lname} dname=${dname}`);

*/

const { send } = require("express/lib/response");

var numUniqueEmails = function(emails) {
    let set = new Set();

    for (let email of emails){
        let n = email.length;
        let index = email.indexOf('@');
        //let [lname, dname] = email.split('@');

        let lname = email.slice(0,index) ;
        let dname = email.slice(index+1,n);

        if (lname.includes('.')){
            lname =lname.replaceAll('.','');
        }
       if (lname.includes('+')){
            lname =lname.substring(0,lname.indexOf('+'));
        }
        email = lname+'@'+dname;
        set.add(email);
    }

    console.log(set);
    return set.size;
};

const numUniqueEmails2 = emails => 
new Set(emails.map(mail => `${mail.split('@')[0].replace(/\+.*$|\./g, '')}@${mail.split('@')[1]}`)).size

let s =["alice@leetcode.com"];
let s2 = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

console.log(numUniqueEmails(s2));