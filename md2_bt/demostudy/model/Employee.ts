import {Person, Gender} from "./Person";

export class Employee extends Person {
    private _work: string;


    constructor(id: number, fullName: string, gender: Gender, age: number, address: string, work: string) {
        super(id, fullName, gender, age, address);
        this._work = work;
    }

    get work(): string {
        return this._work;
    }

    set work(value: string) {
        this._work = value;
    }
    getInfo() {
        return `ID: ${this.id} Fullname: ${this.fullName} Gender: ${this.gender} Age: ${this.age} Work: ${this.work}`
    }
}