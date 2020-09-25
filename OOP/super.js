class MyClass1{

    myFun1(a, b){
        var result1 = a + b;
        console.log("Sum is : " + result1);
    }

    myFun2(p, q){
        var result2 = p + q;
        console.log("Sum is : "+ result2);
    }

    myFun3(x, y){
        var result3 = x + y;
        console.log("Sum is : " + result3);
    }
}

class MyClass2 extends MyClass1{

    mySuperFun(){
        super.myFun1(12.7, 7.0);
        super.myFun2(44.0, 85.04);
        super.myFun3(11.1, 78.00);
    }
}

var object1 = new MyClass2();
object1.mySuperFun();
