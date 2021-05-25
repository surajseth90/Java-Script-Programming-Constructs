// Finding Min and max of five 3 digit values 
let value1 = (Math.floor(Math.random()*100000).toString().substring(0,3))
let value2 = (Math.floor(Math.random()*100000).toString().substring(0,3))
let value3 = (Math.floor(Math.random()*100000).toString().substring(0,3))
let value4 = (Math.floor(Math.random()*100000).toString().substring(0,3))
let value5 = (Math.floor(Math.random()*100000).toString().substring(0,3))

let result ;
if(value2 > value1 && value2 > value3 && value2 > value4 && value2 > value5)
result = value2;
else if(value3 > value1 && value3 > value2 && value3 >value4 && value3 > value5)  
result = value3
else if(value4 > value1 && value4 > value2 && value4 > value3 && value4 > value5)
result = value4
else if(value5 > value1 && value5 > value2 && value5 > value3 && value5 > value4)
result = value5
else 
result = value1
console.log(result)
