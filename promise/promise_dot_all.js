const { checkAvailability } =require('./library_all.js');

const onFulfill = (itemArray) => {
	console.log(`Items checked: ${itemArray}`);
	console.log("Every item was available froom the distributor. Placing order now.")
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason)
};

const checkSunglasses = checkAvailability('sunglasses','Supply Co.')
const checkPants = checkAvailability('pants','Supply Co.')
const checkBags = checkAvailability('bags','Supply Co.')
Promise.all([])
.then(onFulfill)
.catch(onReject)