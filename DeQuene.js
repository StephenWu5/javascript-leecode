// 双端队列的特点是同时支持两端新增和删除元素
// 可以解决回文类、
class MyCircularDeque {
    // 构造器
    constructor(k) {
        this.items = {};
        this.count = 0; // 队伍的最高端
        this.lowestCount = 0; // 队伍的最低端
        this.k = k; //说明了双端队伍的最大长度
    }
    // 前面新增
    insertFront(val) {
        if (this.isFull()) {
            return false;
        }
        // 情况1 从零开始新增
        if( this.count === 0 ) {
            this.insertLast(val);
        } else if (this.lowestCount > 0) {
        // 情况2 最低位不是0
            this.lowestCount--;
            this.items[this.lowestCount] = val;
        } else {
        // 情况3 最低位是0: 整体挪动一位
            for(let index = this.count; index > 0; index--) {
                 this.items[index]  = this.items[index - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[this.lowestCount] = val;
        }
        return true;
    }
    // 前面删除
    deleteFront() {
        if (this.isEmpty()) {
            return false;
        }
        const item = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return true;
    }
    // 前面查看
    getFront() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.items[this.lowestCount];
    }
    // 后面新增
    insertLast(val) {
        if(this.isFull()) {
            return false;
        }
        this.items[this.count] = val;
        this.count++;
        return true;
    }
    // 后面删除
    deleteLast() {
        if (this.isEmpty()) {
            return false;
        }
        const val = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return true;
    }
    // 后面查看
    getRear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.items[this.count - 1];
    }
    // 大小
    size() {
        return this.count;
    }
    // 查看是否为空
    isEmpty() {
        return (this.count - this.lowestCount) === 0;
    }
    // 查看队伍是否满了
    isFull() {
        return (this.count - this.lowestCount) >= this.k;
    }
    // 清空栈
    clear() {
        this.count = 0;
        this.items = {};
        this.lowestCount = 0;
    }
    // 变化为字符串
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let string = this.items[this.lowestCount] + '';
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            string += ',' + this.items[i];
        }
        return string;
    }
}