import {Product} from "../model/Product";

export interface Iproductmanager<T> {
    add(t: T)
    GetList()
    Edit(ID: any, t: T)
    Delete(ID: any)
    FindIndexProduct(ID: any)
FindProductByName(ProductName: string)
}