function findRotatedIndex(arr, int) {
    let rightArr = arr.length - 1;
    let leftArr = 0;
    while(leftArr < rightArr){
        let middle = Math.floor((leftArr + rightArr)/2)
        if(arr[middle] > rightArr) {
            leftArr = middle + 1;
        } else {
            rightArr = middle;
        }
    }
    let val = leftArr;
    leftArr = 0;
    rightArr = arr.length-1

    if(arr[val] <= int && int <= arr[rightArr]) {
        leftArr = val;
    } else {
        rightArr = val;
    }

    while (leftArr < rightArr) {
        let middle = Math.floor((leftArr + rightArr)/2)
        if(int === arr[middle]) {
            return middle;
        }
        if(arr[middle] > int) {
            rightArr = middle - 1;
        } else if 
        (arr[middle] < int) {
            leftArr = middle + 1;
        }
    }
    return -1;
}

module.exports = findRotatedIndex