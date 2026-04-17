//238. Product of Array Except Self

var productExceptSelf = function(nums) {
    let n = nums.length;
    let ans = [];
    let prefix = 1;
    for(let i = 0; i < n; i++)
    {
        ans.push(prefix);
        prefix*=nums[i];
    }
    let suffix = 1;
    for(let i = n - 1; i >= 0; i--){
        ans[i]*=suffix;
        suffix*=nums[i];
    }
    return ans;                 
};

console.log(productExceptSelf([1,2,3,4]));
//console.log(productExceptSelf([-1,1,0,-3,3]));