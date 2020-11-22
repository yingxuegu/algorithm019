/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    _com(n, k, res, 1, []);
    return res;
};

function _com(n, k, res, start, subArr) {
    // terminator
    if (k === 0) {
        res.push([...subArr]);
        return;
    }
    for (let i = start; i <= n - k + 1; i++) {
        // this level
        subArr.push(i);
        // drill down
        _com(n, k - 1, res, i + 1, subArr)
        subArr.pop();
    }
}