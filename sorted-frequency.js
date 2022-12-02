function sortedFrequency(arr, num) {
    let sortedArr = arr.sort();
    for(let i=0; i < sortedArr.length; i++ ){
        if(sortedArr[i] === num) num++;
    }
    return num;
}

module.exports = sortedFrequency