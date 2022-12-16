// 树
// 树的节点有三个属性
// key 节点的值
// left 左节点
// right 右节点
class Node {
    constructor(key) {
        this.key = key
        this.left = null;
        this.right = null;
    }
}

// 判断两个类型大小
function isEqual() {
    if (prev != undefined && next != undefined) {
        return prev === next;
    } else {
        return false;
    }
}

// 二叉搜索树
class BinarySearchTree {
    // 初始化
    constructor() {
        // 根节点
        this.root = null;
        this.count = 0;
    }
    // 新增节点
    inSert(key) {
        if (this.root === null) {
            this.root = new Node(key);
            this.count++;
        } else {
            this.root = this.inSertItem(this.root, key);
        }
    }
    // 新增根节点
    inSertItem(node, key) {
        if ((key - node.key) >= 0) {
            if (node.right === null) {
                node.right = new Node(key);
                this.count++;
            } else {
                node.right = this.inSertItem(node.right, key);
            }
        } else {
            if (node.left === null) {
                node.left = new Node(key);
                this.count++;
            } else {
                node.left = this.inSertItem(node.left, key)
            }
        }
        return node;
    }
    // 树的遍历
    search(node, callBack) {
        if (node !== null) {
            // 中序 以顺序访问节点
            // this.search(node.left, callBack);
            // callBack(node);
            // this.search(node.right, callBack);
            // 前序 文档结构
            // callBack(node);
            // this.search(node.left, callBack);
            // this.search(node.right, callBack);
            // 后续 查看文件夹和子文件夹的属性大小
            this.search(node.left, callBack);
            this.search(node.right, callBack);
            callBack(node);
        }
    }
    // 查找最大值
    getMax() {
        return this.searchMax(this.root);
    }
    // 查找最大值,最小值
    searchMax(node) {
        let current = node;
        while (current.right) {
            current = current.right;
        };
        return current;
    }
    // 查找最小值
    getMin() {
        return this.searchMin(this.root);
    }
    // 查找最大值,最小值
    searchMin(node) {
        let current = node;
        while (current.left) {
            current = current.left;
        };
        return current;
    }
    // 查找某个元素
    has(node, key) {
        // 分四种场景:
        if (node === null) {
            // 节点为null
            return false;
        } else if (key - node.key > 0) {
            //  大于的情况
            return this.has(node.right, key);
        } else if (key - node.key < 0) {
            // 小于的情况
            return this.has(node.left, key);
        } else {
            // 终于找到了
            return true;
        }
    }
    // 删除某一项
    remove(key) {
        return this.removeItem(this.root, key);
    }
    // 删除某一项, 返回新的值【用于判断书的平衡性】
    removeItem(node, key) {
        // 分四种场景:
        if (node === null) {
            // 找不到了节点为null
            return null;
        } else if (key - node.key > 0) {
            //  大于的情况
            node.right = this.removeItem(node.right, key)
            return node;
        } else if (key - node.key < 0) {
            // 小于的情况
            node.left = this.removeItem(node.left, key)
            return node;
        } else {
            // 终于找到了
            // 这里再次分4种情况:
            this.count--;
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            } else if (node.left !== null && node.right === null) {
                node = node.left;
                return node;
            } else if (node.left === null && node.right !== null) {
                node = node.right;
                return node;
            } else {
                // 找到最小的
                const rightMin = this.searchMin(node.right);
                node.key = rightMin.key;
                node.right = this.removeItem(node.right, rightMin.key);
                return node;
            }
        }
    }
}

// 二叉搜索树
const tree = new BinarySearchTree();
tree.inSert(11);
tree.inSert(7);
tree.inSert(15);
tree.inSert(5);
tree.inSert(3);
tree.inSert(9);
tree.inSert(8);
tree.inSert(10);

tree.inSert(13);
tree.inSert(12);
tree.inSert(14);
tree.inSert(20);
tree.inSert(18);
tree.inSert(25);
tree.inSert(6);

console.log(tree, 'tree')
// tree.search(tree.root, (node) => {
//     console.log(node.key, 'callback');
// })
console.log(tree.getMax().key, 'getMax');
console.log(tree.getMin().key, 'getMin');

console.log(tree.has(tree.root, 777), 'has');
console.log(tree.has(tree.root, 18), 'has');
console.log(tree.has(tree.root, 6), 'has');
console.log(tree.remove(6), 'remove');
// console.log(tree.remove(11), 'remove');
console.log(tree, 'tree')