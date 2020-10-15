let arr = [1, 9, 24, 29, 34, 41, 55, 65, 76, 83];
let searchItem = 24;


for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchItem) {
        console.log("Item found in index : " + i);
        break;
    }
}
console.log("Items didn't found");
