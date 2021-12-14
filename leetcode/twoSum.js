/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
https://dev.to/aman_singh/what-s-the-deal-with-object-prototype-hasownproperty-call-4mbj

- return array [ind1, ind2]
- go over array : 
- check if target minus array el=next arr el? 
*/

var twoSum = function (nums, target) {
    var sum = {}
    for (var i = 0; i < nums.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(sum, (target - nums[i]))) {
        sum[nums[i]] = i
      } else {
        return [i, sum[target - nums[i]]]
      }}}

      let obj ={name:"inessa"};
      obj.hasOwnProperty('name'); //returns true
      // Prototype chain 
      //obj —-> Object.prototype ——> null

      //When we created our literal object obj, its prototype was set to Object.prototype.

      Object.getPrototypeof(obj) === Object.prototype // returns true
