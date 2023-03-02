function Person(_name){
    var name = _name;
    this.setName = function(_name){
        name = _name;
    }
    this.getName = function(){
        return name;
    }
}

function Student(_name, _school){
    var school = _school;
    Person.call(this, _name);
    this.setSchool = function(_school){
        school = _school;
    }
    this.getSchool = function(){
        return school;
    }
}

var student = new Student("LamPham", "HUST");
console.log(student.getName());    // => LamPham
console.log(student.getSchool());  // => HUST

student.setSchool("NEU");
student.setName("Ronaldo");

console.log(student.getName());    // => Ronaldo
console.log(student.getSchool());  // => NEU