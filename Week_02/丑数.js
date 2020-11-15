/**
 * @param {number} n
 * @return {number}
 */

const defaultCmp = (x, y) => x > y;
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
class Heap {
    /**
     * 默认是最大堆
     * @param {Function} cmp
     */
    constructor(cmp = defaultCmp) {
        this.container = [];
        this.cmp = cmp;
    }


    insert(data) {
        const { container, cmp } = this;


        container.push(data);
        let index = container.length - 1;
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (!cmp(container[index], container[parent])) {
                return;
            }
            swap(container, index, parent);
            index = parent;
        }
    }


    extract() {
        const { container, cmp } = this;
        if (!container.length) {
            return null;
        }


        swap(container, 0, container.length - 1);
        const res = container.pop();
        const length = container.length;
        let index = 0,
            exchange = index * 2 + 1;


        while (exchange < length) {
            // 如果有右节点，并且右节点的值大于左节点的值
            let right = index * 2 + 2;
            if (right < length && cmp(container[right], container[exchange])) {
                exchange = right;
            }
            if (!cmp(container[exchange], container[index])) {
                break;
            }
            swap(container, exchange, index);
            index = exchange;
            exchange = index * 2 + 1;
        }


        return res;
    }


    top() {
        if (this.container.length) return this.container[0];
        return null;
    }
}

var nthUglyNumber = function(n) {
    let heap = new Heap((x, y) => x < y);
    let primeArr = [2, 3, 5];
    heap.insert(1);
    let res = [];
    let map = new Map();
    for (let j = 0; j < n; j++) {
        let mv = heap.extract();
        res[j] = mv;
        for (let k of primeArr) {
            let temp = k * mv;
            if (!map.has(temp)) {
                heap.insert(temp);
                map.set(temp, true);
            }
        }
    }
    return res[n - 1];
};