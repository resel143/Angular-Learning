console.log("hello world of typescript!");
var perName = "Reshul Wate";
var jobId = 546489;
var message = "Hello ".concat(perName, " your job id is ").concat(jobId);
var arrEmp = ['Reshul', 'Apurva', 'Selena'];
var arrSalary = [15000, 20000, 250000];
var student = {
    fname: "Reshul",
    lname: "Wate",
    gf: "Selena Gomez",
    netWorth: "52 million dollars",
    home: {
        city: "Encino",
        state: "California",
        country: "USA"
    },
    engagement: {
        venue: "Eiffel Tower",
        city: "Paris"
    }
};
// destructuring the array
var _a = student.home, c = _a.city, s = _a.state, t = _a.country;
alert("".concat(c, " ").concat(s, " ").concat(t));
