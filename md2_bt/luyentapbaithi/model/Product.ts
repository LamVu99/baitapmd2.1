export class Product {
    private _ID: number;
    private _name: string;
    private _type: string;
    private _price: number;
    private _soluong: number;
    private _ngaytao: string;
    private _mota: string;

    constructor(ID: number, name: string, type: string, price: number, soluong: number, ngaytao: string, mota: string) {
        this._ID = ID;
        this._name = name;
        this._type = type;
        this._price = price;
        this._soluong = soluong;
        this._ngaytao = ngaytao;
        this._mota = mota;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get soluong(): number {
        return this._soluong;
    }

    set soluong(value: number) {
        this._soluong = value;
    }

    get ngaytao(): string {
        return this._ngaytao;
    }

    set ngaytao(value: string) {
        this._ngaytao = value;
    }

    get mota(): string {
        return this._mota;
    }

    set mota(value: string) {
        this._mota = value;
    }
    getinfo(): any {
        return ` ${this.ID} ${this.name} ${this.type} ${this.price} ${this.soluong} ${this.ngaytao} ${this.mota}`;
    }
}
