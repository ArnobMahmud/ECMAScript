function add(x, y){
    var ans = x + y;
    return ans;
}

function sub(m, n){
    var ans = m - n;
    return ans;
}

function mul(p, q){
    var ans = p * q;
    return ans;
}

function div(a, b){
    var ans = a / b;
    return ans;
}

var arr = [add, sub, mul, div];

console.log(add(4, 9));
console.log(arr[0](5, 9));

console.log(sub(4, 9));
console.log(arr[1](5, 9));

console.log(mul(4, 9));
console.log(arr[2](5, 9));

console.log(div(4, 9));
console.log(arr[3](5, 9));