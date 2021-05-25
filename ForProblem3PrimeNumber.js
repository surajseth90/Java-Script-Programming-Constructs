// Check given number is prime or not 

let number = Math.ceil(Math.random()*100); 
console.log("Number is: "+number);
if(number==1)
    console.log("Number is not Prime");
else{
    for(let i=2;i<=number;i++){
        if(i==number){
            console.log("Number is prime");
            break;
        }
        if(number%i==0){
            console.log("Number is not prime");
            break;
        }
    }
}