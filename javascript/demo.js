let num = [4, 8, 9, 3];
num.map(n => {
    n = n**2
    console.log(n);
    
})



//Transform array of objects

const students = [
    {name: 'Leon', marks: 89},
    {name: 'Grace', marks: 92},
    {name: 'Ada', marks: 75},
];
students.map(s =>{
    console.log('Marks of ${s.name) is ${s.marks}')
})