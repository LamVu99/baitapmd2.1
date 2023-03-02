class Person{
    public name: string;
    public age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    show(): string {
        return `ten toi la: ${this.name} tuoi toi la: ${this.age}`
    }
    }
let p1 = new Person('lamvu',23)
console.log(p1.show())