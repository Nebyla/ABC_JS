let obj = {
	year:  2023,
	month: 2,
	day:   21,
};

let year, month, day;

({year, month, day} = obj)

console.log(day)