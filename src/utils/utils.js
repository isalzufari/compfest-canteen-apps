const changeToIdr = (price) => {
	return "IDR " + price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.")
}

export {
	changeToIdr
}