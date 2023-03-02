// Job Title
import {Person, Gender} from "./Person";
export class Chef extends Person {
    private _Jobposition: string


    constructor(id: number, fullName: string, gender: Gender, age: number, address: string, Jobposition: string) {
        super(id, fullName, gender, age, address);
        this._Jobposition = Jobposition;
    }


    get Jobposition(): string {
        return this._Jobposition;
    }

    set Jobposition(value: string) {
        this._Jobposition = value;
    }
    getInfo() {
        return `ID: ${this.id} Fullname: ${this.fullName} Gender: ${this.gender} Age: ${this.age} Jobposition: ${this.Jobposition}`
    }
}