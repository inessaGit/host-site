/*
https://leetcode.com/problems/count-items-matching-a-rule/
You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:
ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.

Return the number of items that match the given rule.
*/

var countMatches = function(items, ruleKey, ruleValue) {
    let counter=0;
    let idx =ruleKey==="type" ? 0:ruleKey==="color"? 1:2
    for (let item of items){
       if (item[idx]===ruleValue){
           console.log(`idx=${idx} item[idx]=${item[idx]} ruleValue=${ruleValue}`)
           counter++;
       }
    }
    return counter;
};

var countMatches1=function (items, ruleKey, ruleValue) {
    const map = {
        'type': 0,
        'color': 1,
        'name': 2
      }
      //var countMatches = function(items, ruleKey, ruleValue) {
      const countMatches = (items, key, value) => items.filter(i => i[map[key]] == value).length
}

var countMatches2=function (items, ruleKey, ruleValue) {

    let idx=ruleKey=='type'?0:ruleKey=='color'?1:2;

}

let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]];
let items1=[["ii","iiiiiii","ii"],["iiiiiii","iiiiiii","ii"],["ii","iiiiiii","iiiiiii"]];
let ruleKey = "color"
let  ruleValue = "silver";
let ruleValue1="ii"

console.log(countMatches(items1,ruleKey,ruleValue1));//exp 0
console.log(countMatches(items,ruleKey,ruleValue));//exp 1
