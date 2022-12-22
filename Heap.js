import { defaultCompare, Compare } from './utils.js';

// 最小二叉堆
class minHeap {
    constructor(defaultCompare) {
        // 初始化比较函数和
        this.defaultCompare = defaultCompare;
        // 堆的数据使用数组的形式储存数据
        this.heap = []
    }
    // 获取子节点的下标
    getLeftIndex(index) {
        return 2 * index + 1;
    }
    getRightIndex(index) {
        return 2 * index + 2;
    }
    // 获取父节点的下标
    getParentIndex(index) {
        return Math.floor((index - 1) /2);
    }
    /**
     * 插入一个节点
     */
    insert(val) {
        this.heap.push(val);
        let currentIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentIndex);
        // 交换数据；直到currentIndex 为0
        // 上移操作
        while (currentIndex > 0 && defaultCompare(this.heap[currentIndex], this.heap[parentIndex]) === Compare.LESS_THAN) {
            // 交换数值操作
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]]
            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    // 查看最大值或者最小值
    getHeap() {
        return this.heap[0];
    }
    // 删除【导出】最大值或最小值
    remove() {
        // 每次都都导出最大、最小值，所以导出最大、最小值
        const res = this.heap.shift();
        // 如果此时堆空了，不必下沉
        if (this.isEmpty()) {
            return res;
        }
        this.heap.unshift(this.heap.pop());
        this.down(0);
        return res;
    }
    // 下沉操作🍀
    down(index) {
        let element = index;
        const left = this.getLeftIndex(element);
        const right = this.getRightIndex(element);
        const size = this.size();
        // left 或 right 小于 size的情况下
        if (left < size && defaultCompare(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN) {
            element = left;
        }
        if (right < size && defaultCompare(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN) {
            element = right;
        }
        if (element !== index) {
            // 交换
            [this.heap[element], this.heap[index]] = [this.heap[index], this.heap[element]]
            this.down(element);
        }
    }
}

let heap = new minHeap(defaultCompare);
heap.insert(3);
heap.insert(4);
heap.insert(2);
heap.insert(1);
console.log(heap, 'heap');