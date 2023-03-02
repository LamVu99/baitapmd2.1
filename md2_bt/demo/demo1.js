function getage(){
let arr =
    [{
        a: 'lam',
        b: 'c12',
        d: 18
    },
    {
    a: 'giang',
    b:'c13',
    d: 23
}];
let sum = 0;
let newarr = arr.forEach((element) => {
    return sum +=element.d
});
console.log(sum)
}
getage()