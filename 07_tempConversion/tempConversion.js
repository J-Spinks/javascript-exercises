const convertToCelsius = function(temp) {
  x = temp - 32;
  y = (55.555556 / 100) * x;

  toDecimalPlace = y.toFixed(1);

  result = parseFloat(toDecimalPlace);
  return result
};

const convertToFahrenheit = function(temp) {
  x = (180 / 100) * temp

  y = x + 32


   toDecimalPlace = y.toFixed(1);

   result = parseFloat(toDecimalPlace);
   return result


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
