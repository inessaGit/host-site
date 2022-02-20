/*
- split string into words using white space => store in array 
- iterate over array if word.length>=5 then reverse it 
 - a) split into array and reverse()
 - b) or could reverse in place using two pointers
- join array into string and return it 
  */
function spinWords(string){
    let arr = string.split(' ')  ;
      let n = arr.length;
      
      for (let i=0;i<n;i++){
        if(arr[i].length>=5){
          arr[i]=arr[i].split('').reverse().join('');
          
        }
      }
     // console.log(arr.join(' '));
      
      return arr.join(' ');
    }

    let s = "Hey fellow warriors";
    console.log(spinWords(s));

    function reverseWord(s){
        let low =0;
        let high = s.length-1;
        s = s.split('');
        while(low<=high){
           let temp = s[low];
           s[low]=s[high];
           s[high]=temp;
           low++;
           high--;
        }
        return s.join('');
    }

    let str= "inessa";
    console.log(reverseWord(str));