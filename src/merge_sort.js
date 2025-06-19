export function mergeSort(array){
    if(array.length > 1){
        let arr = [];
        const unsorted_left = array.slice(0, Math.floor(array.length / 2));
        const unsorted_right = array.slice(Math.floor(array.length / 2));
        const left = mergeSort(unsorted_left);
        const right = mergeSort(unsorted_right);
        
        while(left.length && right.length){
            if(left[0] <= right.length){
                arr.push(left.shift())
            } else {
                arr.push(right.shift())
            }
        }
        return arr.concat(left, right);
    } else {
        return array;
    }

}
