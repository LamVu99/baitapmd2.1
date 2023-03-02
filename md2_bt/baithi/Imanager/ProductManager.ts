import {Iproductmanager} from "./Imanager";
import {Product} from "../model/Product";

export class ProductManager implements Iproductmanager<Product> {
    products: Product[] = []
    constructor() {
    }

    Delete(ID: any) {
        if(this.FindIndexProduct(ID) != -1) {
            this.products.splice(this.FindIndexProduct(ID), 1)
        } else {
            return console.log(`Delete error!`)
        }
    }

    Edit(ID: any, t: Product) {
        if(this.FindIndexProduct(ID) != -1) {
            this.products[this.FindIndexProduct(ID)] = t
        } else {
            console.log(`edit error!`)
        }
    }

    FindIndexProduct(ID: any) {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if(this.products[i].ID == ID) {
                index = i;
            }
        }
        return index
    }

    GetList() {
        if (this.products.length == 0) {
            console.log('Get list Error!')
        }
        return this.products
    }

    add(t: Product) {
        this.products.push(t)
    }

    FindIndexProductByName(ProductName: string) {
        let index = -1
        for (let i = 0; i < this.products.length; i++) {
            if(this.products[i].ProductName == ProductName) {
                index = i;
            }
        }
        return index;
    }

    FindProductByName(ProductName: string) {
        if (this.FindIndexProductByName(ProductName) != -1) {
           return this.products[this.FindIndexProductByName(ProductName)].getInfo()
        } else {
           return 'Error!'
        }
    }
}