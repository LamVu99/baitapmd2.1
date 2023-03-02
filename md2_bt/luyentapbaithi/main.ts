import {productmanager} from "../luyentapbaithi/Imanager/productManager";
import {Product} from "../luyentapbaithi/model/Product"

let input = require('readline-sync');
let ID = 1;
let product1 = new productmanager();
let adminName = 'admin1234'
let adminpassWord = 'admin1234'
function showLogin() {
    let choice = -1;
    do {
        console.log(`
        1.Admin.
        2.User.
        0.Log Out`)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                checkAdminAccount()
                break;
            case 2:
                checkUserAcount()
                break;
        }
    } while (choice != 0)
}
function checkUserAcount() {
    let regexusername = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let username = '';
    let flag = true;
    do {
        username = input.question('Enter admin account : ')
        if (regexusername.test(username)) {
            flag = true;
            if (flag && username == adminName) {
                console.log(('Xin mời nhập mật khẩu admin!'))
              checkPasswordUser()
            }
        } else {
            console.log(('Sai tên tài khoản hoặc mật khẩu.'))
            flag = false;
        }
    } while (!flag)
}
function checkAdminAccount() {
    let regexusername = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let adminname = '';
    let flag = true;
    do {
        adminname = input.question('Enter admin account : ')
        if (regexusername.test(adminname)) {
            flag = true;
            if (flag && adminname == adminName) {
                console.log(('Xin mời nhập mật khẩu admin!'))
                checkPasswordAdmin()
            }
        } else {
            console.log(('Sai tên tài khoản hoặc mật khẩu.'))
            flag = false;
        }
    } while (!flag)
}
function checkPasswordAdmin() {
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let password = '';
    let flag = true;
    do {
        password = input.question('Enter password : ')
        if (regexPassword.test(password)) {
            console.log(('Đăng nhập thành công !'))
            flag = true;
            if (flag) {
                showMainMenuAdmin()
            }
        } else {
            console.log(('Xin mời nhập lại!'))
            flag = false;
        }
    } while (!flag)
}

function checkPasswordUser() {
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let password = '';
    let flag = true;
    do {
        password = input.question('Enter password : ')
        if (regexPassword.test(password)) {
            console.log(('Đăng nhập thành công !'))
            flag = true;
            if (flag) {

            }
        } else {
            console.log(('Xin mời nhập lại!'))
            flag = false;
        }
    } while (!flag)
}
function showMainMenuAdmin() {
    let choice = -1;
    do {
        console.log(`
        1.Manager User
        2.ManagerProduct
        0.Log Out`)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                break;
            case 2:
                showMainMenuManager()
                break;
        }
    } while (choice != 0)
}
function showMainMenuManager() {
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
                addproduct()
                break;
            case 2:
                getList()
                break;
            case 3:
                deleteProduct()
                break;
            case 4:
                editProduct()
                break;
            case 5:
                findByName()
                break;
        }

    } while (choice != 0)
}


function addproduct() {
    console.log(`-----Menu Add-----`);
    let id = ID;
    let name = input.question('Enter name: ');
    let type = input.question('Enter type: ');
    let price = +input.question('Enter price: ');
    let soluong = +input.question('Enter soluong: ');
    let ngaytao = input.question('Enter ngaytao: ');
    let mota = input.question('Enter mota: ');
    let product: Product = new Product(id, name, type, price, soluong, ngaytao, mota)
    product1.add(product)
    console.log('add finish!')
    return ID++
}

function getList() {
    let product: any = product1.getlist();
    let product2 = product.map((element) => {
        return element.getinfo()
    })
    console.log(product2)
}


function deleteProduct() {
    console.log('-----Delete Menu-----')
    let id = +input.question('Enter id: ')
    product1.delete(id);
    console.log('-----Delete finish!-----')
}

function editProduct() {
    console.log('-----Edit Menu-----')
    let id = +input.question('Enter ID: ');
    let name = input.question('Enter name: ');
    let type = input.question('Enter type: ');
    let price = +input.question('Enter price: ');
    let soluong = +input.question('Enter soluong: ');
    let ngaytao = input.question('Enter ngaytao: ');
    let mota = input.question('Enter mota: ');
    let product: Product = new Product(id, name, type, price, soluong, ngaytao, mota)
    product1.edit(id, product);
    console.log('-----Edit finish!-----')
}

function findByName() {
    console.log('-----Find Menu-----')
    let name = input.question('Enter Name: ')
    console.log(product1.findByName(name));
}
showLogin()