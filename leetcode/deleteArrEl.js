
https://dev.to/alisabaj/removing-an-element-in-an-array-in-place-2hb7
var removeElement = function(nums, val) {
    
    nums.forEach(element=>{
        if (element===val){
            //remove el 
          let index=  nums.indexOf(element);
          console.log(`index ${index}`);

           nums.splice(index,1); 
          // console.log(nums);
        }
    })
    console.log(nums);

    return nums; 
};

removeElement( [0,1,2,2,3,0,4,2], 2   );