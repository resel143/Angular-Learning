// school classes examples

class Teacher{
    tfName: string
    tlName: string
    tdob: Date
    show(): string{
        return (`${this.tfName} ${this.tlName} ${this.tdob}`);
    }
    constructor(tfName: string, tlName: string, tdob: Date){
        this.tfName = tfName;
        this.tlName = tlName;
        this.tdob = tdob;
    }
}

// let t: Teacher = new Teacher("Selena","Gomez",new Date(1992,7,22));
// t.show();

// student class extends teacher

class Student extends Teacher{
    sfName: string
    slName: string
    sdob: Date
    show(): string {
        let teacher = super.show();
        teacher += `${this.sfName} ${this.slName} ${this.sdob}` ;
        return teacher;
    }
    constructor(tfName: string, tlName: string, tdob: Date, sfName: string, slName: string, sdob: Date){
        super(tfName,tlName,tdob);
        this.sfName = sfName;
        this.slName = slName;
        this.sdob = sdob;
    }
}

let student: Teacher = new Student("Selena","Gomez",new Date(1992,7,22),"Reshul","Wate",new Date(2000,3,30));
alert(student.show());
