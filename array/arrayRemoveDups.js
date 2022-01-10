var removeDuplicates = function(s) {
    let stack=[];
    for (let ch of s){
        stack[stack.length-1]===ch ? stack.pop():stack.push(ch);
    }
    
    return stack.join('')
};

//when array SORTED !
var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] != nums[i]) 
          nums[++i] = nums[j];
  }
  return ++i;
};

const removeDuplicates1 = s => {
    const arr = s.split('');
    let ans = 0;
    for (let i = 0; i < arr.length; ++i) {
      ans === 0 || arr[i] !== arr[ans - 1] ? (arr[ans++] = arr[i]) : --ans;
    }
    return arr.slice(0, ans).join('');
  };


  //regex
  const removeDuplicates3 = s => {
    const s2 = s.replace(/(.)\1/g, '');
    return s2.length === s.length ? s : removeDuplicates(s2);
  };

  const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
const uniqueAges = ages.filter((x, i, a) => a.indexOf(x) == i) //[ 26, 27, 28, 29, 30 ]

console.log(uniqueAges)