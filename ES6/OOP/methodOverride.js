class MyClass1{

    myFun1(){
        console.log("This is Function1");
    }

    myFun2(){
        console.log("This is Function2");
    }
}

class MyClass2 extends MyClass1{
     
    myFun1(){
        console.log("This is Function1 inside MyClass2");  // function overrided
    }

    myFun3(){
        console.log("This is Function3");
    }
}

var object1 = new MyClass2();
object1.myFun1();     
object1.myFun2();     
object1.myFun3();