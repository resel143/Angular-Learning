class Person{
    firstName: string
    lastName: string
    dob: Date
    constructor(firstName:string, lastName: string, dob: Date){
        this.firstName = firstName
        this.lastName = lastName
        this.dob= dob
    }
    show(){
        alert(`Welcome ${this.firstName} ${this.lastName}. Are you born on ${this.dob}`);
    }
}

let p: Person = new Person("Reshul","Gomez",new Date(2000,3,30));

p.show();
