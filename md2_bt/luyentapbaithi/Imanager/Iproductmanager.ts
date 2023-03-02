export interface Iproductmanager<T> {
    getlist();
    add(t: T): void;
    findByName(name: string)
    edit(ID: number, t: T)
    findindexbyid(ID: number)
    findindexbyname(name: string)
    delete(ID: number);
}