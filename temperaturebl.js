var celcius = 40;
var fahrenheit = 105;

function toFaranite(res){
    fahrenheitnew = (celcius * 1.8)  + 32.0;
    res.end("farheiniet is " +fahrenheitnew);
}

function toCelcius(res){
    celciustnew =  (5/9) * (fahrenheit-32);
    res.end("celcius is " +celciustnew);
}

module.exports.toCelcius = toCelcius;
module.exports.toFaranite = toFaranite;
