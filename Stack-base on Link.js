// 创建一个建立链表⛓的栈
// 栈的特点是先进后出
// 解决的问题是回文类，1047：删除字符串中的所有相邻重复项，
import { Link } from './Link.js'
class Stack {
    constructor() {
        this.items = new Link({});
    }
    // 在栈顶添加一项
    push(val) {
        this.items.push(val);
    }
    // 在栈顶删除一项
    pop() {
        const size = this.size();
        return this.items.removeByIndex(size - 1);
    }
    // 在栈查看一项
    peek() {
        return this.items[this.count - 1];
    }
    // 查看栈的大小
    size() {
        return this.items.size();
    }
    // 是否为空
    isEmpty() {
        return this.size() === 0;
    }
    // 清空栈
    clear() {
        this.items.clear();
    }
    // 变化为字符串
    toString() {
        return this.items.toString();
    }
}

var stack = new Stack();
stack.push(1111);
stack.push(2222);
console.log(this,stack.clear(), 'clear');
// console.log(stack.pop(), stack.pop(), stack.pop(), '周六')
console.log(stack, stack.size(), stack.isEmpty(),  'stack');
