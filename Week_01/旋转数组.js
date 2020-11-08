/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    let count = 0;
    for (let i = 0; count < nums.length; i++) {
        let currentIndex = i;
        let cur = nums[currentIndex];
        do {
            let nextIndex = (currentIndex + k) % nums.length;
            let temp = nums[nextIndex];
            nums[nextIndex] = cur;
            cur= temp;
            currentIndex = nextIndex;
            count++;
        } while (currentIndex !== i);
    }
};