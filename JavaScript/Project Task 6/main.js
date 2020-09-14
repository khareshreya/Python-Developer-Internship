//Constant kelvin value set to 293
var kelvin;
function convert(kelvin){


//conversion of kelvin to celsius
const celsius= kelvin-273;

//conversion of celsius to fahrenheit
var fahrenheit=celsius * (9/5) + 32;

//rounding off fahrenheit value
fahrenheit= Math.floor(fahrenheit);

console.log("The Temperature is",fahrenheit,"degrees Fahrenheit.");

var newton=celsius*(33/100);
newton= Math.floor(newton);
console.log("The Temperature is",newton,"degrees Newtion.");
}
