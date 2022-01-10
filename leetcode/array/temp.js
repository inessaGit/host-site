//when array sorted  - > use two poiter approach to remove dups in place
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
            console.log(nums)

    }
   // console.log(nums)
    return ++i; //size of array with dups removed 
  };
  
  let a = [1,1,2,3,4,4];
  console.log(removeDuplicates(a));

