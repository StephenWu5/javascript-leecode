// 图的结构--图的简单表示。
import { Graph } from './Graph.js';
import { Quene } from './Quene.js';

// 图的遍历--广度优先搜索
class GraphSearch extends Graph {
    constructor(props) {
        super(props);
        // 搜索时定义姿态
        this.color = {
            white: 0,
            gray: 1,
            black: 2,
        }
    }
    // initDotsColor 初始化 为白色
    initDotsColor = (dots = []) => {
        const COLOR = {};
        for (let i = 0; i < dots.length; i++) {
            COLOR[dots[i]] = this.color.white
        }
        return COLOR;
    }
    // 广度优先搜索
    // start 起点
    // fn 回调函数
    BFS = (start, fn) => {
        const dots = this.getDots();
        const edges = this.getEdges();
        // 初始化点的
        const COLOR = this.initDotsColor(dots);
        const quene = new Quene();
        // 添加start的开始
        quene.push(start);
        while (!quene.isEmpty()) {
            const dot = quene.pop();
            const neibours = edges.get(dot);
            COLOR[dot] = this.color.gray;
            for (let i = 0; i < neibours.length; i++) {
                // 如果等于white, 说明没有探索过
                if (COLOR[neibours[i]] === this.color.white) {
                    quene.push(neibours[i]);
                    COLOR[neibours[i]] = this.color.gray;
                }
            }
            // 探索完毕,加上标记
            COLOR[dot] = this.color.black;
            fn && fn(dot);
        }

    }
}

// 测试用例
const graph = new GraphSearch();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // {12}
for (let i = 0; i < myVertices.length; i++) { // {13}
    graph.addDot(myVertices[i]);
}
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

// console.log(graph.toString(), '888');
graph.BFS(myVertices[0], (dot) => {
    console.log(dot, '999');
})