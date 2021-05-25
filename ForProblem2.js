// harmonic number problem 
let number = Math.floor(Math.random()*10)+1; 
console.log("number is : "+number);
let harmonicNum = 0;
for(let n=1; n<=number; n++){
    harmonicNum = harmonicNum + 1/n;
}
console.log("Harmonic Num: "+harmonicNum);