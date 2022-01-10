
//https://medium.com/swlh/javascript-remove-duplicates-from-sorted-array-in-place-d3d959fb4d77

var removeDuplicates1 = function(nums) {
    let s = new Set(nums); //array to set
    nums=[...s]; //set to array
    console.log(nums);
    console.log(nums.length)
    return nums.length;
};

//removeDuplicates1([0,0,1,1,1,2,2,3,3,4]);
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    console.log(nums)
    return ++i;
};

//string remove adjacent dups 
var removeDuplicates2 = function(s) {
    let chars =s.split(''); 
    
    for (let i=0;i<s.length;i++){
        let j =i+1
        if (chars[i]===chars[j]){
            //dup
            [chars[i],chars[j]]=[0,0];
        }
        else j++;
        console.log(chars)
    }
};
let s="abbaca"
console.log(removeDuplicates2(s));

let st =[];
console.log(st.length); //0

console.log(st[st.length-1])//undefined