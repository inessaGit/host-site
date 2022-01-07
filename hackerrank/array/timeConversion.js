/*
https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem
*/

function timeConversion(s) {
  let n= s.length;
  let converted =s.split('');
    //  s[n-2]==='A' means am
    //s[0]===0 then it is 0-9 
    if (s[0]==='0'){
        //0-9
        let num =parseInt(s[1]);
        if (s[n-2]==='P'){
        num+=12; //IF PM -> change into 24 hrs format 
        num=String(num);//cast to string 
        converted[0]=num[0];
        converted[1]=num[1];
        }
        else {
            //am 
            converted[0]=s[0];
            converted[1]=s[1]
        }
    }

    else if (s[0]==='1') {
        //10-12am 10-12pm 
        //12am ->00:00:00
      let num =s[0]+s[1];
        if (s[1]==='0'||s[1]==='1'){
        if (s[n-2]==='P'){
      //change into 24 hr
      num= parseInt(num)+12;
      num=String(num);//cast to string 
        converted[0]=num[0];
        converted[1]=num[1];
        }
      }
        else if (s[1]==='2'){
            //12am =>00
      if(s[n-2]==="A"){
        converted[0]='0';
        converted[1]='0';
            }
            else {
         converted[0]=s[0];
        converted[1]=s[1];
            }
        }
        
    }
    converted=converted.slice(0,n-2)
   return converted.join('') ;
  }



function foo(x,y) {
	x = x || 11;
	y = y || 31;

	console.log( x + y );
}

foo();				// 42
foo( 5, 6 );		// 11
foo( 5 );			// 36
//foo( null, 6 );		// 17