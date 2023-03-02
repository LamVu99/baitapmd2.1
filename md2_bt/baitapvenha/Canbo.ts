
export enum Gender{
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}
export class Canbo {
    private _Fullname: string;
    private _Age: number;
    private _gender: Gender;
    private _Address: string;

    constructor(Fullname: string, Age: number, gender: Gender, Address: string) {
        this._Fullname = Fullname;
        this._Age = Age;
        this._gender = gender;
        this._Address = Address;
    }
    get Fullname(): string {
        return this._Fullname;
    }
    set Fullname(value: string) {
        this._Fullname = value;
    }
    get Age(): number {
        return this._Age;
    }
    set Age(value: number) {
        this._Age = value;
    }
    get gender(): Gender {
        return this._gender;
    }
    set gender(value: Gender) {
        this._gender = value;
    }
    get Address(): string {
        return this._Address;
    }
    set Address(value: string) {
        this._Address = value;
    }
}
