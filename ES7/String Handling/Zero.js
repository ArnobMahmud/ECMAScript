/*
    Author : Arnob Mahmud

    Mail : arnob.tech.me@gmail.com
*/
                /* String Handling on JS */

var zero = "100" + "0";
console.log(zero);      // string type consider

let a = 0;
let b = " ";

var c = a == b;
console.log(c);   // 0 == " "

let d = null;
var e = d == a;
console.log(e);    // 0 != null

var f = d == b;
console.log(f);    // " " != null

var w = 100
var x = "0"

var y = w - x     // will consider w as a number 
var z = x + y;    //will consider x as a string
console.log(z)  
console.log(w); 

let p = "1000"
let q = 100
let r = 0
let s = "0"

var t = p + q +r + s    // All will be considered as string
console.log(t);

var u = p - q + s - r   // only p & s will be consideredcas string
console.log(u);