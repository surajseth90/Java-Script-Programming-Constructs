// Find Min And Max Of Arthemaic Operations

let value1 = Math.floor(Math.random()*100);
let value2 = Math.floor(Math.random()*100);
let value3 = Math.floor(Math.random()*100);
console.log("A: "+value1);
console.log("value2: "+value2);
console.log("C: "+value3);
let operation1 = value1+value2*value3;
let opertion2 = value1%value2+value3;
let operation3 = value3+value1/value2;
let operation4 = value1*value2+value3;

let max = operation1;
if(opertion2>max)
    max = opertion2;
if(operation3>max)
    max = operation3;
if(operation4>max)
    max = operation4;

console.log("Maximum value is : "+max);

let min = operation1;
if(opertion2<min)
    min = opertion2;
if(operation3<min)
    min = operation3;
if(operation4<min)
    min = operation4;

console.log("Minimum value is : "+min);