
 let s ="ZYazaAay";
 let ch =s[0];
 //let  reg = new RegExp(s[3],'i').test('Z'); //true 
 let  reg = new RegExp(s[3],'i').test(`${s[0]}`); //true 
 
 console.log(reg);
 
 var removeDuplicates = function(nums) {
    let j=0; //store index of next non dup number 
    let n=nums.length;
    for (let i=0;i<n;i++){
      
        if (nums[i]!=nums[j]){
            nums[++j]=nums[i]
        }
    }
    return nums.length===0 ? 0: i++; 
};

let nums =[1,2,3,3,5]
//removeDuplicates(nums);
/*
i0 j0 [ 1, 2, 1, 1, 3, 5 ]
i0 j1 [ 1, 2, 1, 1, 3, 5 ]
i1 j2 [ 1, 2, 1, 1, 3, 5 ]


*/

let num1=[1,1,3,3,4,5];
let num2=[2,6,6,8];

