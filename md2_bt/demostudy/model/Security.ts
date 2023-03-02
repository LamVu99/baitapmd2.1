import {Person, Gender} from "./Person";

export class Security extends Person {
    private _level : number;


    constructor(id: number, fullName: string, gender: Gender, age: number, address: string, level: number) {
        super(id, fullName, gender, age, address);
        this._level = level;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }
    getInfo() {
        return `ID: ${this.id} Fullname: ${this.fullName} Gender: ${this.gender} Age: ${this.age} Level: ${this.level}`
    }
}