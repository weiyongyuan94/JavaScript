/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-23 21:40:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-30 23:54:55
 * @Description: 文件描述
 */
// import LinkedList from "./link/linkedList";

// const list = new LinkedList();

// list.push(90);
function add(a, b) {
    return a + b;
}

function test(x, y) {
    const aa = add.bind(this, x, y);
    return aa();
    // return add.call(this, x, y);
}
function add1(x, y) {
    return add.apply(this, [x, y])
}
console.log(test(90, 10)); // 100
console.log(add1(9, 10)); // 100