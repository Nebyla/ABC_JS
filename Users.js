let now  = new Date();
let date = new Date(1988, 1, 4, 23, 59, 59);
let data = new Date(2000, 10, 2, 23, 59, 59);

let diff = data.getTime() - date.getTime();
console.log(diff / (1000 * 60 * 60));