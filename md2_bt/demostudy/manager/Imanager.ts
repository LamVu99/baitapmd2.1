export interface Imanager<T> {
    getlist();
    add(t: T): void;
    edit(id: number, t: T);
    findIndexById(id: number): number;
    findperson(id: number);
    deleteperson(id: number);
    findIndexByName(name: string);
    findByName(name: string);
}