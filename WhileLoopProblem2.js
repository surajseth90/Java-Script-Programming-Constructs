// find magic number 

let number = Math.ceil(Math.random()*100); 
console.log(number);
let n=45;
let start =0;
let end = 100;
while(n!=number){
    if(n==number)
        console.log("Num is: "+n);
    else if(n>number){
        end = n;
        n=Math.floor((start+end)/2);
    }
    else if(n>number){
        start = n;
        n=Math.floor((start+end)/2);
    }
}