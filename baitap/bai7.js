function checkEvenNumber(number) {
    if (number%2==0) {
       console.log(`${number} là số chẵn.`);
    }
    else{
        console.log(`${number} là số lẻ`);
    }
}
function checkPrimeNumber(number) {
    let isPrime=true;
    if(number<=1){
        isPrime=false;       
    }else{
    for (let i = 2; i <=Math.sqrt(number); i++) {
           if(number%i==0){
            isPrime=false;
            break;
           }   isPrime=true;          
    } return isPrime;                  
    }
}
function checkPerfectNumber(number) {   
        let sum = 0;
        // Các số hoàn hảo: 6, 28, 496, 8128
        for (let i = 1; i < number; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }
        
        if (sum == number) {
            console.log(`${number} là số hoàn hảo.`)
        } else {
            console.log(`${number} không phải số hoàn hảo.`)
        }
}

let number=Number(prompt("Nhập 1 số"));
checkEvenNumber(number);
if (checkPrimeNumber(number)) {
    console.log(`${number} là số nguyên tố.`);
} else {
    console.log(`${number} không là số nguyên tố.`);}

checkPerfectNumber(number);




