/*
https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one


*/

function birthday(s, d, m) {
    // d=target sum , m=target window 
    let counter =0;
    let sum =0;
    let windowStart=0;

    for (let windowEnd=0;windowEnd<s.length; windowEnd++){
        sum+=s[windowEnd];
        if(windowEnd>=m-1){
            if (d===sum)counter++;
            sum-=s[windowStart]; 
            windowStart++; //subtract el , slide window
        }
    }
    console.log(counter);
    return counter; 
}
let s=[2,2,1,3,2];
let m=2;
let d =4; 
birthday (s,d,m)