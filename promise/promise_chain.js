const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((firstResolvedVal) => {
	return processPayment(firstResolvedVal);
})
.then((secondResolvedVal) => {
	return shipOrder(secondResolvedVal)
})
.then((successMessage) => {
	console.log(successMessage)
})
.catch((errorMessage) => {
	console.log(errorMessage)
})