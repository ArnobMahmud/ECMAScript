function addNumber(...numbers) {
    let sum = 0;

    for(let i of numbers){
        sum += i;
    }
        
    console.log(sum);
}

addNumber(1, 3, 6, 8, 45, 34, 35 ,33, 73, 93);