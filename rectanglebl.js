var length = 10;
var bredth = 5;

function area(res){
    var area1 = (length * bredth);
    res.end("area is "+area1);
}

function perimeter(res){
    var perimeter1 = 2*(length + bredth);
    res.end("Perimeter is "+perimeter1);
}

module.exports.area = area;
module.exports.perimeter = perimeter
