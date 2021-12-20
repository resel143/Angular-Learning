class Person{
    firstName: string
    lastName: string
    dob: Date
    show(){
        alert(`Welcome ${this.firstName} ${this.lastName}. Are you born on ${this.dob}`);
    }
}

let p: Person = new Person();
p.firstName = "Reshul";
p.lastName = "Gomez";
p.dob= new Date(2000,3,30);
p.show();
