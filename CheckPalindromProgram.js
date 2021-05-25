function palindromeChecker(firstNumber,secondNumber){
    let palindrome = 0;
    while(firstNumber > 0){
        let rimender = firstNumber % 10;
        palindrome = palindrome * 10 + rimender;
        firstNumber=Math.floor(firstNumber/10);
    }
    if(palindrome == secondNumber)
        return true;
    else 
        return false;
}
console.log(palindromeChecker(123,321));
console.log(palindromeChecker(123,322));