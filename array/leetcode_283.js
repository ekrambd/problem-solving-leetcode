//283. Move Zeroes

var moveZeroes = function(nums) {
	let left = 0;
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] !== 0){
            let temp = nums[left];
            nums[left] = nums[i];
            nums[i] = temp;
            left++; 
        }
    }
    return nums;      
};
console.log(moveZeroes([0,1,0,3,12]));