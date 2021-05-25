let money = 100;
let winCase = 1;
let loseCase = 0;
let countOfBets = 0;
let winBets = 0;
while (money > 0 && money < 200){
    let checkWinOrLose = Math.floor((Math.random()*10)%2);
    if(checkWinOrLose == loseCase){
        money = money - 1;
    }
    else{
        money = money + 1;
        winBets ++;
    }
    countOfBets ++;
}
console.log("Total number of bets : " +countOfBets)
if(money == 200){
    console.log("Now Player have 200 rupees and total number of win count : "+winBets)
}
else{
    console.log("player has 0 rupees")
}
