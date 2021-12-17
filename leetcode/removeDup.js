
//https://medium.com/swlh/javascript-remove-duplicates-from-sorted-array-in-place-d3d959fb4d77

var removeDuplicates1 = function(nums) {
    let s = new Set(nums); //array to set
    nums=[...s]; //set to array
    console.log(nums);
    console.log(nums.length)
    return nums.length;
};

//removeDuplicates1([0,0,1,1,1,2,2,3,3,4]);

