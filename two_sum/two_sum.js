/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


//  check all the combinations by looping through each element and find if there is another value that equals to target
var twoSum = function(nums, target) {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};
console.log(twoSum([2, 7, 11, 15], 9))
// Output [ 0, 1 ]
