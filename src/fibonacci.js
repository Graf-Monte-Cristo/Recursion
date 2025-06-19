export function fibonacci(num){
    let array = [0, 1];
    for (let i = 0; i  < num - 2; i++){
        let number = array[array.length - 1] + array[array.length - 2];
        array.push(number);
    }
    return array;
}

export function recursive_fibonacci(num, array = [0]){
    console.log("Recursive");
    if (array.length === 1){
        array.push(1);
    } else {
        let number = array[array.length - 1] + array[array.length - 2]
        array.push(number);
    }
    if (num > 3){
        recursive_fibonacci(num - 1, array);
    } 
    return array;
    
}
