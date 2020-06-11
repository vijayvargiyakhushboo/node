let inventory= {
	sunglasses:1500,
	pants:283,
	bags:454
}
const myExec= (resolve,reject)=> {
	if(inventory.pants <20){
		resolve("Pants order processed")
	}else{
		reject("That item is sold out")
	}
};
const myPromise = new Promise(myExec)
console.log(myPromise)