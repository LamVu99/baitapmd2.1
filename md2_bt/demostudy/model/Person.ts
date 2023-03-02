export type Gender = 'Male' | 'Female' | 'Other'

export class Person {
    private _id: number;
    private _fullName: string;
    private _gender: Gender;
    private _age: number;
    private _address: string;

    constructor(id: number, fullName: string, gender: Gender, age: number, address: string) {
        this._id = id;
        this._fullName = fullName;
        this._gender = gender;
        this._age = age;
        this._address = address;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(value: Gender) {
        this._gender = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
    getInfo() {
        return `ID: ${this.id} Fullname: ${this.fullName} Gender: ${this.gender} Age: ${this.age}`
    }
}