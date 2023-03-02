import {ProductManager} from "./Imanager/ProductManager";
import {Product} from "./model/Product";


let input = require('readline-sync');
let productManager = new ProductManager();
function showMainMenu() {
    let choice = -1
    do {
        console.log(`
        -----Main Menu-----
        1.Add Product.
        2.Get list.
        3.Delete Product.
        4.Edit.
        5.Find Product By Name
        0.Exit.
        `)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                addProduct()
                break;
            case 2:
                GetList()
                break;
            case 3:
                DeleteProduct()
                break;
            case 4:
                EditProduct()
                break;
            case 5:
                FindByName()
                break;
        }
    } while (choice != 0)
}
let ID = 1
function addProduct() {
    console.log('-----Add Menu----')
    let id = 'B' + ID;
    let ProductName = input.question('Product Name: ')
    let ProductType = input.question('Product Type: ')
    let Price = +input.question('Price: ')
    let Quantity = +input.question('Quanlity: ')
    let day = input.question('innitiated date: ')
    let Describe = input.question('Describe: ')
    let product: Product = new Product(id, ProductName, ProductType, Price, Quantity, day, Describe)
    productManager.add(product)
    return ID++
}
function GetList() {
    let product: any = productManager.GetList()
    product.map(product => {
        console.log(product.getInfo())
    })
}
function DeleteProduct() {
    let id = input.question('Enter id: ');
    productManager.Delete(id)
}
function EditProduct() {
let id = input.question('Enter id: ')
    let ProductName = input.question('Product Name: ')
    let ProductType = input.question('Product Type: ')
    let Price = +input.question('Price: ')
    let Quantity = +input.question('Quanlity: ')
    let day = input.question('innitiated date: ')
    let Describe = input.question('Describe: ')
    let product: Product = new Product(id, ProductName, ProductType, Price, Quantity, day, Describe);
    productManager.Edit(id, product)
}
function FindByName() {
let ProductName = input.question('Product Name: ')
    console.log(productManager.FindProductByName(ProductName))
}
showMainMenu()