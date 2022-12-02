function countZeroes(arr) {
  let newArr = arr.sort();
  for(let i = 0; i < newArr.length; i++) {
    return newArr.filter(z => z === 0).length;
  }
}

module.exports = countZeroes