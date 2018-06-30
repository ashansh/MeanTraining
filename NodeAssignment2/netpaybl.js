

function calculateGrosspay(basicpay){

var hra =0;
var grosspay = 0;
var deduction = 1000;

    if(basicpay > 50000){
        hra = basicpay*(0.4);
    }
    else{
        hra = basicpay*(0.3);
    }

    grosspay = basicpay + hra - deduction;
    console.log("Calculated" +grosspay);
    return grosspay;

}

module.exports.calculateGrosspay = calculateGrosspay;