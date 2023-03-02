let numbers: number[] = [0, 2, 3, 5, 6, 8, 9, 10]
let newarr: number[] = []
let i: number = 0
while (i < numbers.length) {
    if(numbers.indexOf(i) === -1) {
        newarr.push(i)
    }
    i++
}
console.log(newarr)