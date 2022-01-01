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


// Graph system X, Y coordinates and its constructor initialization

class Point{
    x:number;
    y:number;

    constructor(x:number = 2, y:number=8){
        this.x = x;
        this.y = y;
    }

    draw= ()=>{console.log("X: "+ this.x + " Y: "+this.y)};



}
// a constructor is always called whenever the object is created!
let point = new Point();
point.draw();
