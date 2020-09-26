function add(x, y) {
    var sum = x + y;
    return sum;
}

var  obj  = {
    ans : add,
}

console.log(add(3, 5));
console.log(obj.ans(3, 5));