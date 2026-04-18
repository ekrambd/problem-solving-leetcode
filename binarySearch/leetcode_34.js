var searchRange = function(nums, target) {

    // find first position
    let findFirst = () => {
        let left = 0;
        let right = nums.length - 1;
        let ans = -1;

        while(left <= right){

            let mid = Math.floor((left + right) / 2);

            if(nums[mid] === target){
                ans = mid;
                right = mid - 1;   // keep searching left
            }
            else if(nums[mid] < target){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
        }

        return ans;
    };

    // find last position
    let findSecond = () => {

        let left = 0;
        let right = nums.length - 1;
        let ans = -1;

        while(left <= right){

            let mid = Math.floor((left + right) / 2);

            if(nums[mid] === target){
                ans = mid;
                left = mid + 1;   // keep searching right
            }
            else if(nums[mid] < target){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
        }

        return ans;
    };

    return [findFirst(), findSecond()];
};

console.log(searchRange([5,7,7,8,8,10],8));