// printing series of 2^n 
let n = Math.floor(Math.random()*100); 
console.log("value of n : "+n);
let count =1;
let power =1;
while(power<=256 && count<=n){
    console.log(power);
    power = power*2;
    count++;
}