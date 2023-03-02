let arr = [{name: 'lam', ID: 123
}, {name: 'Lam', ID: 321}];
function find(ID) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].ID === ID) {
            index = i
        }
    }
    return index;
}
function Delete(ID) {
    if (find(ID) !== -1) {
        arr.splice(find(ID), 1)
    }
}
function update(ID, name) {
    if (find(ID) !== -1) {
        arr.name
    }
}
update(123,'lamvu')
console.log(arr)