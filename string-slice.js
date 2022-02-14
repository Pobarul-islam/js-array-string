const anthem = 'Amar sonar Bangla ami tomai valobasi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

// slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr

const anotherPart = anthem.substr(11, 7);
// console.log(anotherPart);

// substring

const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);


// concat
const first = 'Amader';
const second = 'city';
const fullString = first.concat(second).concat('abc').concat('RJ Kibria');
// const fullString = first + second;
console.log(fullString);


// join

const words2 =  ['alim', 'badhon', 'choity', 'dobirul'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
// const allJoined = words2.join(', ');
const allJoined = words2.join('WWW');



console.log(allJoined);