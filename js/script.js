
for (let i = 1; i <= 100 ; i++) {
    let a;
    if (i % 3 === 0 && i % 5 === 0){
        a = 'FizzBuzz';
    } else if (i % 3 === 0){
        a = 'Fizz';
    } else if (i % 5 === 0){
        a = 'Buzz';
    } else {
        a = i;
    }
    console.log (a);
}