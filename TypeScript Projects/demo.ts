console.log("hello world of typescript!");

let perName: string = "Reshul Wate";
let jobId: number = 546489;

let message: string = `Hello ${perName} your job id is ${jobId}`;

let arrEmp: string[] = ['Reshul', 'Apurva', 'Selena'];

let arrSalary: Array<number> = [15000, 20000, 250000];


let student = {
    fname: "Reshul",
    lname: "Wate",
    gf: "Selena Gomez",
    netWorth: "52 million dollars",
    home:{
        city:"Encino",
        state:"California",
        country:"USA"
    },
    engagement:{
        venue:"Eiffel Tower",
        city:"Paris",
    }
}

// destructuring the array

let {home:{city:c,state:s,country:t}} = student;
alert(`${c} ${s} ${t}`);