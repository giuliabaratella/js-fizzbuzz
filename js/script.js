
for (let i = 1; i <= 100 ; i++) {

    let a;

    const boxN = document.createElement('div');
    boxN.className = `box d-flex align-items-center justify-content-center fw-bold text-uppercase`;
    let wrapper = document.querySelector('.wrapper');
    wrapper.append (boxN);

    if (i % 3 === 0 && i % 5 === 0){
        a = 'FizzBuzz';
        boxN.classList.add ('bg-fizzbuzz');
    } else if (i % 3 === 0){
        a = 'Fizz';
        boxN.classList.add ('bg-fizz');
    } else if (i % 5 === 0){
        a = 'Buzz';
        boxN.classList.add ('bg-buzz');
    } else {
        a = i;
        boxN.classList.add ('bg-box');
    }
    console.log (a);
    
    boxN.innerHTML = a;
}


