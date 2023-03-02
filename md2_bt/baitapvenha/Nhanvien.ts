import {Gender} from "./Canbo";
import {Canbo} from "./Canbo";
export class Nhanvien extends Canbo {
    private _Congviec: string

    constructor(Fullname: string, Age: number, gender: Gender, Address: string, Congviec: string) {
        super(Fullname, Age, gender, Address);
        this._Congviec = Congviec;
    }

    get Congviec(): string {
        return this._Congviec;
    }

    set Congviec(value: string) {
        this._Congviec = value;
    }
}
