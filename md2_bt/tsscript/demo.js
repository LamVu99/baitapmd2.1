//Tạo ra 1 hàm khởi tạo cơ sở
function Animal(_age){
    this.age = _age;
}

//Có thể thêm thuộc tính vào thuộc tính prototype của hàm khởi tạo
Animal.prototype.showAge = function(){
    console.log( this.age );
};

//Tạo ra 1 hàm khởi tạo con (sẽ dùng để kế thừa hàm cơ sở)
function Dog(_color){
    this.color = _color;
}
//Thực hiện kế thừa, gán hàm khởi tạo của Animal cho prototype của Dog
Dog.prototype = new Animal();
Dog.prototype.showColor = function(){
    console.log( this.color );
};

//Kiểm tra sự kế thừa
var chophuquoc = new Dog('yellow');
chophuquoc.age = 3;
chophuquoc.showAge();       //3
chophuquoc.showColor();     //yell