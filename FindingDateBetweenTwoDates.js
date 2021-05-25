// Finding wheather date is between 20 march and 20 june or not 

    let month
    let day 
    if(day<=31 && month<=12){
        if(day>20 && month>=3 && month<=6)
            console.log("True");
        else 
            console.log("False");
    }
    else 
        console.log("Invalid Date")