function MyFun1(){
    return 30;
}

function MyFun2(){
    return MyFun1();
}

console.log(MyFun1() + MyFun2());