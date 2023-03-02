enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}
class nhanvien {
    Fullname: string = '';
    gender: Gender = Gender.Male;
    Birthday?: string;
    Email: string;
    Phone: string;
    constructor(Fullname: string, gender: Gender, Birthday:string, Email:string, Phone:string) {
        this.Fullname = Fullname;
        this.gender = gender;
        this.Birthday = Birthday;
        this.Email = Email;
        this.Phone = Phone;
    }
}
let danhsachnhanvien: nhanvien[] = [];
danhsachnhanvien.push(new nhanvien("Nguyen Van A", Gender.Male, '23', "anguyen@gmail.com", '01234567891'));
danhsachnhanvien.push(new nhanvien("Nguyen Van B", Gender.Female, '24', "anguyen2@gmail.com", '01234567892'));
danhsachnhanvien.push(new nhanvien("Nguyen Van C", Gender.Other, '25', "anguyen3@gmail.com", '01234567893'));
for (const danhsachnhanvienKey in danhsachnhanvien) {
    console.log(danhsachnhanvien)
}