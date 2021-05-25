// find prime number between two given numbers 

let firstNumber = Math.ceil(Math.random()*10); 
let lastNumber = Math.ceil(Math.random()*100);
console.log("Start number : " + firstNumber);
console.log("End number : "+lastNumber);
if(lastNumber > firstNumber){
    if (firstNumber==1)
    console.log("Not Prime");
    else{
        for(let i= firstNumber; i<=lastNumber;i++){
            for(let j=2;j<= i ;j++){
                if(j==i){
                    console.log("Prime number : "+i);
                }
                if(i%j==0)
                    break;   
            }
        }
    }
}