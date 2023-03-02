var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "other";
})(Gender || (Gender = {}));
var nhanvien = /** @class */ (function () {
    function nhanvien(Fullname, gender, Birthday, Email, Phone) {
        this.Fullname = '';
        this.gender = Gender.Male;
        this.Fullname = Fullname;
        this.gender = gender;
        this.Birthday = Birthday;
        this.Email = Email;
        this.Phone = Phone;
    }
    return nhanvien;
}());
var danhsachnhanvien = [];
danhsachnhanvien.push(new nhanvien("Nguyen Van A", Gender.Male, '23', "anguyen@gmail.com", '01234567891'));
danhsachnhanvien.push(new nhanvien("Nguyen Van B", Gender.Female, '24', "anguyen2@gmail.com", '01234567892'));
danhsachnhanvien.push(new nhanvien("Nguyen Van C", Gender.Other, '25', "anguyen3@gmail.com", '01234567893'));
for (var danhsachnhanvienKey in danhsachnhanvien) {
    console.log(danhsachnhanvien);
}
