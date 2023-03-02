class Students {
    Fullname: string;
    Clas: string;
    Email: String;
    Age: Number;
    constructor(Fullname: string, Clas: string, Email: String, Age: Number) {
        this.Fullname = Fullname;
        this.Clas = Clas;
        this.Email = Email;
        this.Age = Age;
    }
    getFullname(): string {
        return this.Fullname;
    }
    getClass(): string {
        return this.Clas
    }
    getEmail(): any {
        return this.Email;
    }
    getAge(): any {
        return this.Age;
    }
    setFullname(Fullname: string): void {
        this.Fullname = Fullname;
    }
    setClas(Clas:string): void {
        this.Clas = Clas;
    }
    setEmail(Email:string): void {
        this.Email = Email;
    }

    setAge(Age:number):void {
       this.Age = Age;
    }
}
let p1 = new Students('Lamvu', 'C1222', 'dange6801@gmail.com', 23)
let p = p1.getEmail()
p1.setClas('C1233')
console.log(p)