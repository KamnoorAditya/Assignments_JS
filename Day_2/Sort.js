function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

let len = Number(prompt("Enter the size of the array:"));
let arr = [];

for (let i = 0; i < len; i++) {
    arr[i] = Number(prompt("Enter number:"));
}

console.log("Sorted array:", sortArray(arr));