// 创建一个node节点、内容有当前节点，和当前指向下一个的节点。
class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}
// 判断两个类型是否相等。
function isEqual(prev, next) {
    if (prev != undefined && next != undefined) {
        return prev === next;
    } else {
        return false;
    }
}

// 创建普通链表⛓
// 普通链表类
class MyLinkedList {
    // 初始化
    constructor() {
        this.head = new Node();
        this.isEqual = isEqual;
        this.count = 0;
    }
    // push 给链表添加数据
    addAtTail(element) {
        const node = new Node(element);
        let current = this.head;
        if (current == undefined) {
            // 如果当前链表为空，直接赋值
            this.head = node;
        } else {
            // 找到当前最末端
            while (current.next != undefined) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    // 给链表⛓删除数据项
    deleteAtIndex(index) {
        if (index >= 0 && index < this.count) {
            // 分三种场景:
            let current = this.head;
            // 删除第一个
            if (index === 0) {
                if (current.next === undefined) {
                    // 1、只有第一项
                    this.head = undefined;
                } else {
                    // 2、不只只有一项，让第一项的下一项成为this.head
                    // current = current.next;
                    this.head = current.next;
                }
            } else {
                // 3、关键是找到上一项和当前项
                // 优化本次的逻辑
                // let previous;
                // for (let i = 0; i < index - 1; i++) {
                //     current = current.next;
                // }
                const previous = this.get(index - 1);
                current = previous.next;
                // 删除某一项的关键是让
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        } else {
            // 
            return false;
        }
    }
    // 获取某一项
    get(index) {
        // 3、关键是找到上一项和当前项
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    // 在头部新增
    addAtHead(element) {
        this.addAtIndex(0, element);
    }
    // 添加一项
    // 分三种场景: 
    addAtIndex(index, element) {
        const node = new Node(element);
        if (index >= 0) {
            let current = this.head
            if (index === 0) {
                if (current === undefined) {
                    // 1、在头部添加-直接添加
                    this.head = node;
                } else {
                    // 2、在头部添加-非直接添加
                    node.next = current;
                    this.head = node;
                }
            } else {
                // 3、在非头部上添加
                const previous = this.get(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        } else {
            return false;
        }
    }
    // 根据元素值获取索引
    indexOf(element) {
        // for循环只返回return所返回的值，并不会执行下一次循环
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (isEqual(element, current.element)) {
                // 同时,return 作为函数返回值返回
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    // 删除特定的元素
    removeElement(element) {
        const pos = this.indexOf(element);
        this.removeByIndex(pos);
    }
    // 返回数组大小
    size() {
        return this.count;
    }
    // 是否为空
    isEmpty() {
        return this.size() === 0;
    }
    // 清空操作
    clear() {
        this.head = undefined;
        this.count = 0;
    }
    // 获取头部
    getHead() {
        return this.head;
    }
    // 把链表⛓转化为字符串
    toString() {
        if(this.size() <= 0) {
            return '';
        }
        let current = this.head;
        let resString = this.head.element;
        for (let i = 1; i < this.size() && current != null; i++) {
            current = current.next;
            resString += `、${current.element}`
        }
        return resString;
    }
}


