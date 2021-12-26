/*
https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
Note that multiple kids can have the greatest number of candies.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
*/

    //find largest int in candies ; map array with +extra ; comapare with the largest
var kidsWithCandies = function(candies, extraCandies) {
    let result =[];
    let largest=Math.max(...candies);
    let extras =candies.map((el)=>{
       return el+extraCandies;
    });

    for (let el of extras){
        if (el<largest){
            result.push(false)
        }
        else result.push(true)
    }
    return result; 
};

let candies =[12,1,12];
console.log(kidsWithCandies(candies,10)); //exp Output: [true,false,true]
