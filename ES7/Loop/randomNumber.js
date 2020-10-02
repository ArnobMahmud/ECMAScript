var isPlay = true;
var i = 0;
while (isPlay) {
    var score = Math.floor(Math.random() * 10 + 1);
    if (score == 9) {
        console.log("Winner. You have tried " + i + " times");
        isPlay = false;
    } else {
        i++;
        console.log("You Have Scored " + score);
    }

}