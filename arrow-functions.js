/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
/*function addTwoNumbers(a, b) {
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum); */

// Arrow Function With Parameters
// const addTwoNumbers = (a, b) => {
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);


// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => a + b;
// let sum2 = addTwoNumbers2(6, 4);
// console.log(sum2);

// Implicit Returns
// const saySomething = message => console.log(message);
// saySomething("Hello there!!");

// const sayHello = () => console.log("Hello");
// sayHello();
// Returning Multiple Lines
// const returnMultipleLines = () => (
//     `<p>
//         This is a multiline string!
//     </p>`
// )
// console.log(returnMultipleLines());

// const students = [
//     {
//       id: 1,
//       name: 'Mark',
//       profession: 'Developer',
//       skill: 'JavaScript'
//     },
//     {
//       id: 2,
//       name: 'Ariel',
//       profession: 'Developer',
//       skill: 'HTML'
//     },
//     {
//       id: 3,
//       name: 'Jason',
//       profession: 'Designer',
//       skill: 'CSS'
//     },
//   ];

//   const studentsWithIds = students.map(students => [students.name, students.id]);
//   console.log(studentsWithIds);

const people = [
    {
        name: "Michael",
        age: 23,
    },
    {
        name: "Lianna",
        age: 16,
    },
    {
        name: "Paul",
        age: 18,
    },
]

// const oldEnough = people.filter(person => person.age >= 21);
// console.log(oldEnough);

const paul = people.filter(p => p.name === "Paul");
console.log(paul);