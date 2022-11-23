// 创建一个建立链表⛓的栈
// 栈的特点是先进后出
// 解决的问题是回文类，1047：删除字符串中的所有相邻重复项，
import { Link } from './Link.js'
console.log(Link, 'link');
class Stack {
    constructor() {
        // this.count = 0;
        this.items = new Link();
    }
    // 在栈顶添加一项
    push(val) {
        this.items.push(val);
    }
    // 在栈顶删除一项
    pop() {
        const size = this.items.size();
        
    }
    // 在栈查看一项
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    // 查看栈的大小
    size() {
        return this.count;
    }
    // 是否为空
    isEmpty() {
        return this.count === 0
    }
    // 清空栈
    clear() {
        this.count = 0;
        this.items = {};
    }
    // 变化为字符串
    toString() {
        if (this.count === 0) {
            return '';
        }
        let string = this.items[0] + '';
        for (let i = 1; i < this.count; i++) {
            string += this.items[i];
        }
        return string;
    }
}

