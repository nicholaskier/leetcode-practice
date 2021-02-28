
// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

let ones = 0

var hammingWeight = function(n){
    let nums = n.toString()
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            ones += 1
        } 
    }
    return ones
};

//  unsolved, not sure why. Could not find a JS solution