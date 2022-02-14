const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];

// slice
const numbersSliced = numbers.slice(4, 8);
// console.log(numbersSliced);
// console.log(numbers);


// splice to remove an element from an array
const numbersSpliced = numbers.splice(4, 3, 99, 111, 888);
// console.log(numbersSpliced);
// console.log(numbers);


// 

const numbersSpliced2 = numbers.splice(4, 3, 99, 111, 888, 777);
console.log(numbersSpliced2);
console.log(numbers);