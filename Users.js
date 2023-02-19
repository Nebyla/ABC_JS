let result = filter([1, 2, 3, 4, 5], elem => elem % 2 == 0);

let result1 = every([1, 2, 3, 4, 5], (elem, index) => (elem * index > 10));

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result2 = each(arr, (elem, index) => (elem * index > 10))