import {Canbo} from "./Canbo";
import {Gender} from "./Canbo";
import {CongNhan} from "./CongNhan";
export class Kysu extends Canbo {
    private _Nghanhdaotao: string;

    constructor(Fullname: string, Age: number, gender: Gender, Address: string, Nghanhdaotao: string) {
        super(Fullname, Age, gender, Address);
        this._Nghanhdaotao = Nghanhdaotao;
    }

    get Nghanhdaotao(): string {
        return this._Nghanhdaotao;
    }

    set Nghanhdaotao(value: string) {
        this._Nghanhdaotao = value;
    }
}