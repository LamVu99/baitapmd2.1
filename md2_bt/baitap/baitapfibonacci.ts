function fibonacci(n: any) {
    let n1: number = 0;
    let n2: number = 1;
    let sum: number = 0;
    let nextnumber: number = 0;
    for (let i=0; i <= n; i++) {
        console.log(n1)
        nextnumber = n1 + n2;
        n1 = n2;
        n2 = nextnumber
    }
    if (n <= 1) {
        return sum = fibonacci(n - 1) + fibonacci(n + 1)
        console.log(sum)
    }
    return n;

}
fibonacci(20)