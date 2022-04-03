
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
 {name: 'Baba', id: 101, marks : 23 },
 {name: 'yaga', id: 200, marks : 45 },
 {name: 'Wick', id: 115, marks : 75 } ]


// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']

// let value = []
// studentRecords.forEach(S => {
//     value.push(S.name.toUpperCase())
// })
// console.log(value);

//"Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

// let result = studentRecords.filter(s=>s.marks>50)
// console.log(result);


//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

// let score = studentRecords.filter(s=>s.marks>50 && s.id>120)
// console.log(score);

//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

// let sum = studentRecords.reduce(((acc,curr)=>acc+curr.marks),0)
// console.log(sum);

//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

// let result = studentRecords.filter(s=>s.marks>50)
//     .map(s=>s.name)
// console.log(result);

// Question 6: This time we are required to print the sum of marks of the students with id > 120.

// let print = studentRecords.filter(s=>s.id>120)
//     .reduce(((acc,curr)=>acc+curr.marks),0)
    // console.log(print);

//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

// let add = studentRecords.map(function(sum){
//     if(sum.marks<50){
//         sum.marks+=15;
//     }
//     return sum;
// })
// .filter((sum)=>sum.marks>50).reduce(((acc,curr)=>acc+curr.marks),0)
// console.log(add);

//Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

let objects = [
    {name:"sainath", class:B-tech,  rollno:"17BK5A0216"},
    {name:"sainath", class:diploma, rollno:"17BK5A0217"},
    {name:"sainath", class:inter,   rollno:"17BK5A0218"},
    {name:"sainath", class:M-tech,  rollno:"17BK5A0219"},
    {name:"sainath", class:B-pharm, rollno:"17BK5A0220"},
    {name:"sainath", class:M-pharm, rollno:"17BK5A0221"}
]


