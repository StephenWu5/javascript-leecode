// 工具类方法
export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

// 工具类方法，比较
export function defaultCompare(a, b) {
    if (a === b) { // {1}
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // {2}
}
