import {Block, students} from "./students";

export class Tuyensinh {
    tuyensinh: students[] = []

    constructor() {
    }

    getList() {
        return this.tuyensinh
    }

    addstudent(Student: students) {
        this.tuyensinh.push(Student)
    }

    findindexStudent(ID: number) {
        let index = -1;
        for (let i = 0; i < this.tuyensinh.length; i++) {
            if (this.tuyensinh[i].ID === ID) {
                index = i;
            }
        }
        return index;
    }

    findStudent(ID: number) {
        if (this.findindexStudent(ID) !== -1) {
            return this.tuyensinh[this.findindexStudent(ID)]
        }
    }
}
let student1 = new students(Block.BlockA, 123, 'Lam Vu','Ha Noi', 1);
let student2 = new students(Block.BlockB, 124, 'Hoang Nguyen','Nghe An', 2);
let student3 = new students(Block.BlockC, 125, 'Linh Tran','Quang Nam', 3);
let Student = new Tuyensinh()
Student.addstudent(student1);
Student.addstudent(student2);
Student.addstudent(student3);
console.log(Student.findStudent(125))