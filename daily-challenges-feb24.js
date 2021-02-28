// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].



// var twoSum = function(nums, target) {
//     var output = []
//     for (i = 0; i < nums.length; i++) {
//         if (nums[i] + nums[i + 1] == target) {
//             output.push(i, i + 1)
//             return output
//         }
//     }
// };

// var twoSum = function(nums, target) {
//     var output = []
//     var x = 0
//     var y = 1
//     while ( x < nums.length ) {
//         if ( nums[x] + nums[y] == target ) {
//             output.push(x, y)
//             return output
//         } else {
//         x += 1
//         y += 1
//         }
//     }
// };


// Solution (not found in time limit)

const twoSum = function(nums, target) {
    const comp = {}
    for (let i = 0; i < nums.length; i++){
        if(comp[nums[i]] >= 0) {
            return [comp[nums[i]], i]
        }
        comp[target - nums[i]] = i
    }
}




console.log(twoSum([3, 2, 5], 7))

