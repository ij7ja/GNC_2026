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


