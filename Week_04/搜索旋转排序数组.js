/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length;
    let start = 0;
    let end = len - 1;
    while (start <= end) {
        let mid = start + ((end - start) >> 1);
        if (target === nums[mid]) {
            return mid;
        }
        if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};