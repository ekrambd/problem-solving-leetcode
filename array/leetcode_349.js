//349. Intersection of Two Arrays

var intersection = function(nums1, nums2) {
    let map = new Map();
    for(let i = 0; i < nums1.length; i++)
    {
        let count = map.get(nums1[i]);
        if(count == null){
            map.set(nums1[i],1);
        }else{
            map.set(nums1[i],count+1);
        }
    }
    let result = [];
    for(let i = 0; i < nums2.length; i++)
    {   
        let count = map.get(nums2[i]);
        if(count > 0 && !result.includes(nums2[i])){
            result.push(nums2[i]);
        }
    }
    return result;       
};

console.log(intersection([1,2,2,1],[2,2]));
console.log(intersection([4,9,5],[9,4,9,8,4]));