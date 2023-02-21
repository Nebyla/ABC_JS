let arr = ['Yunus', 'Mustafaev', 'development', 'programmer', 2000];

let [name, surname, develop, ...d] = arr

let position;
if (arr[3] !== undefined) {
	position = arr[3];
} else {
	position = 'trainee';
}
