import {Gender} from "./Canbo";
import {Canbo} from "./Canbo";
export class CongNhan extends Canbo {
private _level: number;

    constructor(Fullname: string, Age: number, gender: Gender, Address: string, level: number) {
        super(Fullname, Age, gender, Address);
        this._level = level;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }
}