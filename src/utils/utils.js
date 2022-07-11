const changeToIdr = (price) => {
	return "IDR " + price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.")
}

const showFormattedDate = (date) => {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	}
	return new Date(date * 1000).toLocaleDateString("id-ID", options)
}

export {
	changeToIdr,
	showFormattedDate
}