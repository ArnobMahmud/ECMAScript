class MyClass1{

    myFun1(){
        console.log("This is Function1");
    }

    myFun2(){
        console.log("This is Function2");
    }
}

class MyClass2 extends MyClass1{
     
    myFun3(){
        console.log("This is Function3");
    }
}

var object1 = new MyClass2();
object1.myFun1();     // inherited by class2 from class1 but object calling by class2
object1.myFun2();     // inherited by class2 from class1 but object calling by class2
object1.myFun3();