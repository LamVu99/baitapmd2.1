export class Product {
    private _ID: string;
    private _ProductName: string;
    private _ProductType: string;
    private _Price: number;
    private _Quantity: number;
    private _Day: string;
    private _Describe: string;

    constructor(ID: string, ProductName: string, ProductType: string, Price: number, Quantity: number, Day: string, Describe: string) {
        this._ID = ID;
        this._ProductName = ProductName;
        this._ProductType = ProductType;
        this._Price = Price;
        this._Quantity = Quantity;
        this._Day = Day;
        this._Describe = Describe;
    }

    get ID(): string {
        return this._ID;
    }

    set ID(value: string) {
        this._ID = value;
    }

    get ProductName(): string {
        return this._ProductName;
    }

    set ProductName(value: string) {
        this._ProductName = value;
    }

    get ProductType(): string {
        return this._ProductType;
    }

    set ProductType(value: string) {
        this._ProductType = value;
    }

    get Price(): number {
        return this._Price;
    }

    set Price(value: number) {
        this._Price = value;
    }

    get Quantity(): number {
        return this._Quantity;
    }

    set Quantity(value: number) {
        this._Quantity = value;
    }

    get Day(): string {
        return this._Day;
    }

    set Day(value: string) {
        this._Day = value;
    }

    get Describe(): string {
        return this._Describe;
    }

    set Describe(value: string) {
        this._Describe = value;
    }
    getInfo() {
        return `Ma san pham: ${this._ID} Ten san pham: ${this._ProductName} Loai san pham: ${this._ProductType} Gia san pham: ${this._Price} Ngay tao: ${this._Day} Chi tiet san pham: ${this._Describe}`
    }
}