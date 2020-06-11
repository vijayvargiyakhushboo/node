function add(a,b){
	return a+b
}
function multiply(a,b){
	return a*b
}
/*console.log("Addition : "+add(2,3))
console.log("Multiplication : "+multiply(6,3))*/

module.exports.sum = add
module.exports.multiply = multiply