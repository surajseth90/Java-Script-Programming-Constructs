const prompt=require('prompt-sync')();
let number=prompt("Enter the number");
let scale=0;
let palindrome="";
while((number/10)<0)
    scale++;
checkPrime(parseInt(number));
checkPalindrome(number,scale);
checkPrime(parseInt(palindrome));



function checkPalindrome(number,scale){
    
    for(var i=0;i<scale;i++){
      let temp=(number%(10*(i+1)));
      if(i!=0){
          temp=parseINt(temp/(10*i));
      }
      palindrome=palindrome+temp;
    }
    if(parseInt(palindrome)==parseInt(number))
         console.log("number is palindrome");
    else 
         console.log("not palindrome");
    
}

function checkPrime(number){
    let check=true;
    for(var iterator=2;iterator<number;iterator++){
        if(number%iterator==0) 
           check=false;
    }
    if(check==true)
        console.log("number is prime");
    else 
        console.log("number is not prime");
}