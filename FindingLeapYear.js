// Source code to find leap year in java script 
let year = process.argv ;
if((year[2] % 4 ==0 && year[2] % 100 !=0 ) || year[2] % 400 == 0 )
console.log("This is a leap year")
else
console.log("This is not a leap year")