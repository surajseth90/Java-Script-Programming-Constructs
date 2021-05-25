// find prime factors of given number 

let number = Math.ceil(Math.random()*100);
console.log("Number is : " + number);
console.log("Factors are : ");
for(let i=2;i<=number;i++){
    if(number%i==0){
        for(let j=2;j<=i;j++){
            if(j==i){
                console.log(i);
                break;
            }
            if(i%j==0){
                break;
            }
        }
    }
}
