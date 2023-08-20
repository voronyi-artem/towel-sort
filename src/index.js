
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
    let result = [];
    for(let i=0; i<matrix.length; i++) {
      if(i%2===0) result.push(...matrix[i]);
      else {
        let reverseArray = matrix[i].reverse();
        result.push(...reverseArray);
      }
    }
    return result;
}

