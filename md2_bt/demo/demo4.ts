class Book {
   public ID: string;
    public name: string;

    constructor(ID: string,
                name: string) {
        this.ID = ID;
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getID(): string {
        return this.ID;
    }

}
let p1 = new Book('123', 'huongvan')
let p = p1.getName()
console.log(p)