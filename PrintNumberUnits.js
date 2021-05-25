// Printing Number Units by name

let digit = process.argv;
if(digit==1)
    console.log("Unit");
else if(digit==10)
    console.log("Ten");
else if(digit==100)
    console.log("Hundred");
else if(digit==1000)
    console.log("Thousand");
else
    console.log("Invalid Number!!")