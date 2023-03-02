import {Personmanager} from "./manager/personManager";
import {Person} from "./model/Person";
import {Chef} from "./model/Chef";
import {Employee} from "./model/Employee";
import {Security} from "./model/Security";
import {Housekeeper} from "./model/Housekeeper";


let input = require('readline-sync');
let ID = 1;
let personmanager = new Personmanager();
function checkUserName(){
    let regexUserName = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let username = '';
    let flag = true;
    do {
        username = input.question('Enter UserName: ')
        if(regexUserName.test(username)) {
            console.log(('Xin mời nhập mật khẩu'))
            flag = true;
            if(flag) {
                checkPassword()
            }
        } else {
            console.log(('Xin mời nhập lại!'))
            flag = false;
        }
    } while (!flag)
}
function checkPassword() {
let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
let password = '';
let flag = true;
do {
    password = input.question('Enter password : ')
    if(regexPassword.test(password)) {
        console.log(('Đăng nhập thành công !'))
        flag = true;
        if (flag) {
            showMainMenu()
        }
    } else {
        console.log(('Xin mời nhập lại!'))
        flag = false;
    }
} while (!flag)
}
function showMainMenu() {
    let choice = -1;
    do {
        console.log(
            `
        ---- Main Menu ----
        1.New add.
        2.GetList.
        3.Find By Name.
        4.Edit.
        5.Delete.
        
        0.Exit.
        `
        )
        choice = +input.question('Enter Choice: ')
        switch (choice) {
            case 1:
                showAddMenu()
                break;
            case 2:
                getList()
                break;
            case 3:
                findByName()
                break;
            case 4:
                editMenu()
                break;
            case 5:
                deletePerson()
                break;
        }
    } while (choice !== 0);
}

function showAddMenu() {
    let choice1 = -1;
    do {
        console.log(
            `
        ---- Add Menu ----
        1.Add Chef.
        2.Add Employee.
        3.Add Housekeeper.
        4.Add Security.
        0.Back to Main Menu.
        `
        )
        choice1 = +input.question('Enter Choice: ')
        switch (choice1) {
            case 1:
                addChef()
                break;
            case 2:
                addEmployee()
                break;
            case 3:
                addHousekeeper()
                break;
            case 4:
                addSecurity()
                break;
        }
    } while (choice1 !== 0);
}

function editMenu() {
    let choice1 = -1;
    do {
        console.log(
            `
        ---- Add Menu ----
        1.Edit Chef
        2.Edit Employee
        3.Edit Housekeeper
        4.Edit Security
        0.Back to Main Menu
        `
        )
        choice1 = +input.question('Enter Choice: ')
        switch (choice1) {
            case 1:
                editChef()
                break;
            case 2:
                editEmployee()
                break;
            case 3:
                editHousekeeper()
                break;
            case 4:
                editSecurity()
                break;
        }
    } while (choice1 !== 0);
}

function addChef() {
    console.log('-----Menu add Chef------')
    let id = ID;
    let fullName = input.question('Enter Fullname: ');
    let gender = input.question('Enter gender: ');
    let age = +input.question('Enter age: ')
    let address = input.question('Enter address: ')
    let jobposition = input.question('Enter jobposition: ');
    let chef: Chef = new Chef(id, fullName, gender, age, address, jobposition);
    personmanager.add(chef);
    console.log('-----Add finish!-----');
    return ID++;
}

function addEmployee() {
    console.log('-----Menu add Employee------')
    let id = ID
    let fullName = input.question('Enter Fullname: ');
    let gender = input.question('Enter gender: ');
    let age = +input.question('Enter age: ');
    let address = input.question('Enter address: ');
    let work = input.question('Enter work: ');
    let employee: Employee = new Employee(id, fullName, gender, age, address, work);
    personmanager.add(employee);
    console.log('-----Add finish!-----');
    return ID++;
}

function addHousekeeper() {
    console.log('-----Menu add Housekeeper------')
    let id = ID;
    let fullName = input.question('Enter Fullname: ');
    let gender = input.question('Enter gender: ');
    let age = +input.question('Enter age: ')
    let address = input.question('Enter address: ')
    let mission = input.question('Enter mission: ');
    let housekeeper: Housekeeper = new Housekeeper(id, fullName, gender, age, address, mission);
    personmanager.add(housekeeper);
    console.log('-----Add finish!-----');
    return ID++
}

function addSecurity() {
    console.log('-----Menu add Security------')
    let id = ID;
    let fullName = input.question('Enter Fullname: ');
    let gender = input.question('Enter gender: ');
    let age = +input.question('Enter age: ')
    let address = input.question('Enter address: ')
    let level = +input.question('Enter level: ');
    let security: Security = new Security(id, fullName, gender, age, address, level);
    personmanager.add(security);
    console.log('-----Add finish!-----');
    return ID++
}


function getList() {
    let showPerson = personmanager.getlist();
    if (showPerson.length != 0) {
        for (const showPersonKey in showPerson) {
            console.log(showPerson[showPersonKey].getInfo())
        }
    } else {
        console.log(`Need to add someone before get list!!`)
    }
}

function deletePerson() {
    console.log('-----Delete By ID-----')
    let id = +input.question('Enter ID: ')
    personmanager.deleteperson(id)
}

function editChef() {
    console.log('-----Menu edit Chef------')
    let id = +input.question('Enter ID: ')
    let fullName = input.question('Enter Fullname: ');
    let gender = input.question('Enter gender: ');
    let age = +input.question('Enter age: ')
    let address = input.question('Enter address: ')
    let jobposition = input.question('Enter jobposition: ');
    let chef: Chef = new Chef(id, fullName, gender, age, address, jobposition);
    personmanager.edit(id, chef);
}

function editEmployee() {
    console.log('-----Menu edit Employee------')
    let id = +input.question('Enter ID: ')
    let fullName = input.question('Enter Fullname: ');
    let gender = input.question('Enter gender: ');
    let age = +input.question('Enter age: ')
    let address = input.question('Enter address: ')
    let work = input.question('Enter work: ');
    let employee: Employee = new Employee(id, fullName, gender, age, address, work);
    personmanager.edit(id, employee);
}

function editHousekeeper() {
    console.log('-----Menu edit Housekeeper------')
    let id = +input.question('Enter ID: ')
    let fullName = input.question('Enter Fullname: ');
    let gender = input.question('Enter gender: ');
    let age = +input.question('Enter age: ')
    let address = input.question('Enter address: ')
    let mission = input.question('Enter mission: ');
    let housekeeper: Housekeeper = new Housekeeper(id, fullName, gender, age, address, mission);
    personmanager.edit(id, housekeeper);
}

function editSecurity() {
    console.log('-----Menu edit Security------')
    let id = +input.question('Enter ID: ')
    let fullName = input.question('Enter Fullname: ');
    let gender = input.question('Enter gender: ');
    let age = +input.question('Enter age: ')
    let address = input.question('Enter address: ')
    let level = +input.question('Enter level: ');
    let security: Security = new Security(id, fullName, gender, age, address, level);
    personmanager.edit(id, security);
}

function findByName() {
    let fullname = input.question('Enter Fullname: ')
    console.log(personmanager.findByName(fullname))
}
checkUserName()