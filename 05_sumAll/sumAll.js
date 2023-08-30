const sumAll = function(start, end) {
  if (start < 0 || end < 0) {
    return 'ERROR';
  }

  if (start !== Number(start) || end !== Number(end)) {
    return 'ERROR';
  }

  if (start > end){
    [start, end] = [end, start];
  }

  let sum = 0;

  for (let num = start; num <= end; num++) {
    sum += num;

  }



  return sum

};

// Do not edit below this line
module.exports = sumAll;


// Number(x) !== x || Number(y) !== y
