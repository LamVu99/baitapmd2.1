// Các thí sinh dự thi đại học bao gồm các thí sinh thi khối A, B, và khối C. Các thí sinh cần quản lý các thông tin sau: Số báo danh, họ tên, địa chỉ,
// priority.
//     Thí sinh thi khối A thi các môn: Toán, Lý, Hoá.
//     Thí sinh thi khối B thi các môn: Toán, Hoá, Sinh.
//     Thí sinh thi khối C thi các môn: Văn, Sử, Địa.
//     Yêu cầu 1: Xây dựng các lớp để quản lý các thi sinh dự thi đại học.
//     Yêu cầu 2: Xây dựng lớp TuyenSinh có các chức năng:
//     	Thêm mới thí sinh.
// 	Hiện thị thông tin của thí sinh và khối thi của thí sinh.
// 	Tìm kiếm theo số báo danh.
// 	Thoát khỏi chương trình.
export enum Block{
    BlockA = 'A: math, geography, chemistry',
    BlockB = 'B: math, chemistry, biology',
    BlockC = 'C: literature, history, geography',
}
export class students {
    private _Block: Block;
    private _ID: number;
    private _Fullname: string;
    private _Address: string;
    private _Priority: number;
    constructor(Block: Block,ID: number, Fullname: string, Address: string, Priority: number) {
        this._Block = Block;
        this._ID = ID;
        this._Fullname = Fullname;
        this._Address = Address;
        this._Priority = Priority;
    }

    get Block(): Block {
        return this._Block;
    }

    set Block(value: Block) {
        this._Block = value;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get Fullname(): string {
        return this._Fullname;
    }

    set Fullname(value: string) {
        this._Fullname = value;
    }

    get Address(): string {
        return this._Address;
    }

    set Address(value: string) {
        this._Address = value;
    }

    get Priority(): number {
        return this._Priority;
    }

    set Priority(value: number) {
        this._Priority = value;
    }
    getinFo() {
        return this;
    }
}