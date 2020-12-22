/*
    Author : Arnob Mahmud

    Mail : arnob.tech.me@gmail.com    
*/

let birthdayGirl = "Wish_person";

class Person {
  wish() {
    var WishText = (dataPass) => {
      console.log(dataPass);
    };
    WishText("Happy Birthday " + birthdayGirl);
  }
}

var fabrican = new Person();
fabrican.wish();