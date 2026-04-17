//33. Search in Rotated Sorted Array
var search = function(nums, target) {

    let left = 0
    let right = nums.length - 1

    while(left <= right){

        // Find middle index
        let mid = Math.floor((left + right) / 2)

        // If target found
        if(nums[mid] === target){
            return mid
        }

        // Check if left side sorted
        if(nums[left] <= nums[mid]){

            // Check target in left range
            if(target >= nums[left] && target < nums[mid]){
                right = mid - 1
            }else{
                left = mid + 1
            }

        }else{

            // Right side sorted

            // Check target in right range
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
    }

    return -1
};

console.log(search([4,5,6,7,0,1,2],0));
// console.log(search([4,5,6,7,0,1,2],3));
//console.log(search([1],0));