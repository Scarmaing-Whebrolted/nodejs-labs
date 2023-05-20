// Import t1 from './1-task.js';
// import t2 from './2-task.js';
// import t3 from './3-task.js';
import t4 from './4-task.js';

// TASK 1
// console.log(t1.add(4)(6)());

// TASK 2
// console.log(t2.stringsAreAnagrams('hello', 'olleh'));

// TASK 3
// type Bag = {
// 	color: string;
// 	weightKg: number;
// };
//
// type Student = {
// 	age: number;
// 	subjects: string[];
// 	bag: Bag;
// };
//
// const student: Student = {
// 	age: 40,
// 	subjects: ['Math', 'Data science'],
// 	bag: {
// 		color: 'green',
// 		weightKg: 5,
// 	},
// };
//
// const clonedStudent: Student = t3.deepClone(student);
// console.log(JSON.stringify(student) === JSON.stringify(clonedStudent));

// TASK 4
const cachedAdd = t4.cacheWrapper(t4.add);
console.log(cachedAdd(2, 3, 5));
console.log(cachedAdd(4, 2, 5));
console.log(cachedAdd(4, 2, 5));
