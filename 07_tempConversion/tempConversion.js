const convertToCelsius = function (temp) {
  const cels = (temp - 32) * 5 / 9;
  // if (cels == 0) return 0;
  return parseFloat(cels.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  const faren = (temp * 9 / 5 + 32);
  // if (faren==0) return 0;
  return parseFloat(faren.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
