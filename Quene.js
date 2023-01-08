// 队列的特点是先进先出
// export const Quene = class Quene {
// 可以解决击鼓传💐的问题；
export class Quene {
    // 构造器
    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    // 添加一项
    push(val) {
        this.items[this.count] = val;
        this.count++;
    }
    // 删除一项
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return item;
    }
    // 查看一项
    peek() {
        return this.items[this.lowestCount];
    }
    // 大小
    size() {
        return this.count - this.lowestCount;
    }
    // 查看是否为空
    isEmpty() {
        return (this.count - this.lowestCount) === 0;
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