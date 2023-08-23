const repeatString = function(word, number) {

  if(number < 0 ) return "ERROR";
  let string = "";
  let i = 0;
  while(i < number) {
    string += word;
    i++
  }
  return string
};

// Do not edit below this line
module.exports = repeatString;
