/*

https://leetcode.com/problems/determine-color-of-a-chessboard-square/

a,c,e,g : return charAt(1)%2==0 ? true: false
else return charAt(1)%2==0 ? false:true 

a1 = black
a2= white 
a3 = black 
a4=white 

b,d,f,g 
b1=white 
b2=black 
b3= white 
b4=black 
*/


var squareIsWhite = function(coordinates) {
    let letter = coordinates.charAt(0);
    let digit = coordinates.charAt(1); 

    if (letter=='a'|| letter=='c'|| letter=='e' || letter=='g'){
        return (digit%2==0) ? true: false;
    }
    else      return (digit%2==0) ? false: true;

};
console.log(1%2);
console.log(squareIsWhite('a1'));