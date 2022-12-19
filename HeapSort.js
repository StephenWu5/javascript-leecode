import { defaultCompare, Compare } from './utils.js';

// 堆排序
// 顺序:
// 1  先形成一个大顶堆的结构
// 2  堆的第一个数据数组最后一个数据交换,形成一个升序的数据结构
function heapSort(array = [], compareFn = defaultCompare) {
    // let len = array.length;
    //1  先形成一个大顶堆的结构
    maxHeap(array, compareFn);
    let heapSize = array.length;
    while (heapSize > 1) {
        let pos = --heapSize;
        [array[0], array[pos]] = [array[pos], array[0]];
        heapify(array, 0, heapSize, compareFn);
    }
    return array;
}

// 创建最大堆的结构
function maxHeap(array, compareFn) {
    heapify(array, 0, array.length, compareFn);
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, i, array.length, compareFn);
    }
    return array;
}

// 排序
function heapify(array, index, heapSize, compareFn) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let element = index;
    if (left < heapSize && compareFn(array[element], array[left]) === Compare.LESS_THAN) {
        element = left;
    }
    if (right < heapSize && compareFn(array[element], array[right]) === Compare.LESS_THAN) {
        element = right;
    }
    if (index !== element) {
        [array[index], array[element]] = [array[element], array[index]];
        heapify(array, element, heapSize, compareFn);
    }
}

const array = [6,2,3,5,4,1,7];
console.log(array, 'before');
console.log(heapSort(array), 'after');