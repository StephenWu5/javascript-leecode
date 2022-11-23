// 创建一个建立javascritp 对象的栈
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    // 在栈顶添加一项
    push(val) {
        this.items[this.count] = val;
        this.count++;
    }
    // 在栈顶删除一项
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        const val = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return val;
    }
    // 在栈查看一项
    peek() {

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

// 10进制到2进制
function change(descNumber) {
    if (descNumber === undefined) {
        return undefined;
    }
    let stack = new Stack();
    let number = descNumber;
    // 余数
    let rem;
    // 商数
    let quotient = number / 2;
    while (quotient > 0) {
        rem = number % 2;
        stack.push(rem);
        quotient = (number - rem) / 2;
        number = quotient;
    }

    let descNumberString = '';
    console.log(stack, 'stack');
    while (!stack.isEmpty()) {
        descNumberString += stack.pop();
    }
    return descNumberString;
}


