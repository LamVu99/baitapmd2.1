enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER'
}
class Employee {
    ID: number;
    Fullname: string;
    gender: Gender;
    Birthday?: Date;
    Email: string;
    Phonenumber: string;
    constructor(ID: number,Fullname: string, gender: Gender, Birthday: Date, Email: string, Phonenumber: string) {
        this.ID = ID;
        this.Fullname = Fullname;
        this.gender = gender;
        this.Birthday = Birthday;
        this.Email = Email;
        this.Phonenumber = Phonenumber;
    }
getID(ID: number) {
        return this.ID;
}
}
