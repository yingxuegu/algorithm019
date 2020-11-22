/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  const DFS = function(arr) {
    if (arr.length === nums.length) {
      result.push(arr.slice())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (!arr.includes(nums[i])) {
        arr.push(nums[i])
        DFS(arr)
        arr.pop(nums[i])
      }
    }
  }

  DFS([])

  return result
};

作者：MuYunyun
链接：https://leetcode-cn.com/problems/permutations/solution/hui-su-jie-ti-by-muyunyun/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。