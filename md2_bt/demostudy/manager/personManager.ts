import {Imanager} from "./Imanager";
import {Person} from "../model/Person";
import {Chef} from "../model/Chef";
import {Security} from "../model/Security";
import {Employee} from "../model/Employee";
import {Housekeeper} from "../model/Housekeeper";

export class Personmanager implements Imanager<Person> {
    static persons: Person[] = []

    constructor() {
    }

    add(t: Person) {
        Personmanager.persons.push(t)
    }

    deleteperson(id: number) {
        if (this.findIndexById(id) !== -1) {
            Personmanager.persons.splice(this.findIndexById(id), 1)
        } else {
            console.log( '-------There is no person to be delete!------' )
        }
    }

    edit(id: number, t: Person) {
        if (this.findIndexById(id) !== -1) {
            Personmanager.persons[this.findIndexById(id)] = t
        } else {
            console.log( '-------There is no person to be edit!------' )
        }
    }

    findIndexById(id: number) {
        let index = -1
        for (let i = 0; i < Personmanager.persons.length; i++) {
            if (Personmanager.persons[i].id === id) {
                index = i
            }
        }
        return index
    }

    findperson(id: number) {
        if (this.findIndexById(id) !== -1) {
            return Personmanager.persons[this.findIndexById(id)]
        }
    }

    getlist() {
        return Personmanager.persons
    }

    findIndexByName(name: string) {
        let index = -1
        for (let i = 0; i < Personmanager.persons.length; i++) {
            if (Personmanager.persons[i].fullName == name) {
                index = i;
            }
        }
        return index;
    }

    findByName(name: string) {
        if (this.findIndexByName(name) != -1) {
            let person = Personmanager.persons[this.findIndexByName(name)].getInfo()
                return person
        } else {
            return `-------There is no person to be found!------`
        }
    }
}
