Array.prototype.map2 = function (callback){
    output = [];
    for (let i = 0; i < this.length; ++i) {
result = callback(this[i], i)
        output.push(result)
    }
    return output;
}
let courses = [
    'Javascript',
    'Ruby',
    'Python'
];
// let htmls = courses.map(function (course) {
//     return `<h2>${course}</h2>`;
// })
// console.log(htmls.join(''))\
let htmls = courses.map2(function (course, index) {
    return `<h2>${course}</h2>`
})
console.log(htmls.join(''))
