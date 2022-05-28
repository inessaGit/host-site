/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-separate-the-numbers/problem?isFullScreen=true

A numeric string, , is beautiful if it can be split into a sequence of two or more positive integers: 
- i.e., each element in the sequence is  more than the previous element).
AND
- no leading 0 e.g s=10203 = {1,02,03} not beautiful because it has 0 
AND
-
 If it is beautiful, print YES x, where x is the first number of the increasing sequence. 
 If there are multiple such values of , choose the smallest.
  Otherwise, print NO.

  Approach: 
-  know that the input string can contain 32 characters maximum.
-  know that can't be beautiful if it has 1 char


  function separateNumbers(s) {
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        const start = s.slice(0, i)
        let num = BigInt(start)
        let built = ''
        while (built.length < s.length) 
        built += num++
        if (built === s) return console.log('YES', start)
    }
    console.log('NO')
}
*/

function separateNumbers(s) {
    if (s.length <= 1) {
        console.log('NO');
        return;
    };
    let res = checkBeau(s, 1);
    if(res) console.log('YES ' + res);
    else console.log('NO');
}

function checkBeau(s, len){
    if (len >= s.length) return null;
    let numLen = len;
    let idx = numLen;
    let num = s.substring(0, numLen);
    let flag = false;
    
    while(idx + numLen <= s.length){
        const nextNum = s.substring(idx, idx+numLen);
        if(nextNum[0] === '0') break;
        let tmp = parseInt(BigInt(nextNum) - BigInt(num));
        // let tmp = nextNum - num;
        // console.log('tmp:',tmp)
        if (tmp === 1) {
            idx += numLen;
            num = nextNum;
        } else if(tmp < 1){
            numLen += 1;
            continue;
        } else break;
    }
    if (idx >= s.length) return s.substring(0, len);
    else return checkBeau(s, len+1);
}

function main() {
    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        separateNumbers(s);
    }
}

// "1230" no 10203 no "1234" yes 
let s='1234' //exp YES 1 
let s2="91011" //YES 9
let s3 ="99100" //YES 99
let s4="101103" //NO
let s5="010203" //NO
let s6="13" //NO 
let s7="1"//NO 

separateNumbers(s) ;
separateNumbers(s2);
separateNumbers(s3);
separateNumbers(s4);
separateNumbers(s5);
separateNumbers(s6);
separateNumbers(s7);