import {Iproductmanager} from "./Iproductmanager";
import {Product} from "../model/Product";


export class productmanager implements Iproductmanager<Product> {
    products: Product[]

    constructor() {
        this.products = [];
    }

    add(t: Product): void {
        this.products.push(t);
    }

    delete(ID: number) {
if (this.findindexbyid(ID) != -1) {
    this.products.splice(this.findindexbyid(ID), 1)
} else {
    console.log('delete error!')
}
    }

    edit(ID: number, t: Product) {
        if (this.findindexbyid(ID) != -1) {
            this.products[this.findindexbyid(ID)] = t;
        } else {
            return `edit error!`
        }
    }

    findByName(name: string) {
        if (this.findindexbyname(name) != -1) {
            return this.products[this.findindexbyname(name)]
        } else {
            return `find error!`
        }
    }

    findindexbyid(ID: number) {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].ID === ID) {
                index = i;
            }
        }
        return index;
    }

    findindexbyname(name: string) {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name == name) {
                index = i;
            }
        }
        return index;
    }

    getlist() {
        if (this.products.length != 0) {
        return this.products;
        } else {
            return `get list error!`
        }
    }
}