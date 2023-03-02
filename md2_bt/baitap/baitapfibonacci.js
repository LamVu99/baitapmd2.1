// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
        console.log(num)
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);

    }
}

fibonacci(6)
// take nth term input from the user
// const nTerms = 20;
//
// if(nTerms <=0) {
//     console.log('Enter a positive integer.');
// }
// else {
//     for(let i = 0; i < nTerms; i++) {
//         console.log(fibonacci(i));
//     }
// }