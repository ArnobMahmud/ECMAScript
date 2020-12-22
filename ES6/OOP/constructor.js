class MyClass{

    constructor(x , y){   // value gained by constructor
        this.num1 = x;
        this.num2 = y;
    }

    addNum(){
        var result = this.num1 + this.num2;
        console.log("Sum is : " + result);
    }
}

var setNum = new MyClass(12, 38);  // object declare + send value by parameter
setNum.addNum();  // method call by object