let arr = [1,3,5,4,5,6,7,7,7]
arr.sort((a,b) => b - a)
let arrnew = [arr[0]];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i-1]) {
        arrnew.push(arr[i])
    }
}
console.log(`so lon thu 2 la ${arrnew[1]}`)
