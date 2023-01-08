// 图的结构--图的简单表示。
export class Graph {
    constructor() {
        // 是否有方向性
        this.hasDirection = false;
        // 点的集合
        this.dot = [];
        // 边的集合
        this.edge = new Map();
    }
    // 添加点的操作
    addDot = (dot) => {
        this.dot.push(dot);
        this.edge.set(dot, []);
    }
    // 添加边的操作 dot1 是点， dot2是临点
    addEdge = (dot1, dot2) => {
        if (!this.dot.includes(dot1)) {
            this.addDot(dot1)
        }
        if (!this.dot.includes(dot2)) {
            this.addDot(dot2)
        }
        this.edge.get(dot1).push(dot2);
        if (!this.hasDirection) {
            this.edge.get(dot2).push(dot1);
        }
    }
    // 返回点的集合
    getDots = () => {
        return this.dot;
    }
    // 返回边的集合
    getEdges = () => {
        return this.edge;
    }
    // 遍历图的结构
    toString() {
        let result = ``;
        for (let i = 0; i < this.dot.length; i++) {
            result += `
            当前的点是：${this.dot[i]}，它的邻点有：`;
            const edges = this.edge.get(this.dot[i]);
            for (let i = 0; i < edges.length; i++) {
                result += `${edges[i]}`;
            }
        }
        return result;
    }
}


const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // {12}

for (let i = 0; i < myVertices.length; i++) { // {13}
    graph.addDot(myVertices[i]);
}
console.log(graph, 'graph');
graph.addEdge('A', 'B'); // {14}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString(), '888');