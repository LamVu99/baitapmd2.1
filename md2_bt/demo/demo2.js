function flatarr() {
    let arr = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
    let newarr = arr.reduce((a,b) => {
        return a.concat(b)
    }, [])
    let arrnew = newarr.reduce((a,b) => {
        return {
            ...newarr
        }
    }, {})
    return arrnew
}

console.log(flatarr())