// find factorial of given number 

let number = Math.floor(Math.random()*100);
console.log(number)
let factorial =1;
if(number==0)
    factorial=factorial;
else{
    for(let i =1; i<=number;i++){
        factorial = factorial * i;
    }
}
console.log("factorial of :"+number +" is : " + factorial);
