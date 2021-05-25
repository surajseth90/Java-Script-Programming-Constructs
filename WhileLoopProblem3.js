// heads and tails Problem 

const HEADS = 0;
const TAILS = 1;
let headsCount =0;
let tailsCount=0;
while(headsCount != 11 && tailsCount != 11){
let toss = Math.floor(Math.random()*10)%2;
    switch(toss){
        case HEADS:
            headsCount ++;
            break;
        case TAILS:
            tailsCount++;
            break;
    }
}
if(headsCount > tailsCount){
    console.log("Heads win")
}
else if(tailsCount > headsCount){
    console.log("Tails win")
}
else 
    console.log("Draw")

   