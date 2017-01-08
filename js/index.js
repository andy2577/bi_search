function biSearch(stack, needle) {
    let low = 0
      , high = stack.length - 1;
      
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = stack[mid];
        if (guess == needle) {
            return mid;
        }
        if (guess > needle) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}
let list = [1, 2, 3, 5, 6, 7, 8, 9, 12, 14, 15];

console.log(biSearch(list, 5));