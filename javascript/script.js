console.log('Java script is running');

let name = 'Shabab';
console.log(typeof name);


function divisible(){
    num1 = document.getElementById('num1').value;
    display = document.getElementById('demo');

    let i;

    if(num1 % 3 == 0){
        display.innerHTML = "Divisible by 3";
        console.log("Divisible by 3");
    }
    
    else{
        for(i = 1; i <= 10; i++){
            display.innerHTML = "Not divisible";
            console.log("Not divisible by 3");
        }
    
    }
}



const sqr = (n) => console.log(n*n)

sqr(5)
const spr = (n) => {
    console.log("spr");
    console.log(n*n);
    console.log(n*n);
}



spr(5)


const grade = (marks) => {
    if(marks > 90){
        return "A"
    }
    else if(marks >= 70){
        return "B"
    }
    else{
        return "Fail"
    }
}

console.log(grade(50));



//CHANGE COLORS ON CLICK
// let box = document.querySelector(".box");
// let c = 0;

// box.addEventListener('click', () => {
//     let colors = ['red', 'blue', 'yellow', 'green', 'gray', 'lime'];
//     box.style.backgroundColor = colors[c]

//     c = (c+1)%colors.length;
// })


let box = document.querySelector(".box");
let c = 0;

const change = () => {
    let colors = ['red', 'blue', 'yellow', 'green', 'gray', 'lime'];
    box.style.backgroundColor = colors[c]
    c = (c+1) % colors.length;
    console.log("Changing");
    
}

box.addEventListener('click', change)
setInterval(change, 1000)
