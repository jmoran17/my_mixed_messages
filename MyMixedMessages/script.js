// nested array that holds all the random answers possible
let signEval = [["you should watch your back","you will receive great happiness soon","keep your eyes open for oppurtunities"],["your next oppurtunity is right around the corner","love is right around the corner for you","when one door closes another opens keep your head up"],["A beautiful, smart, and loving person will be coming into your life","A faithful friend will soon be your strongest defense","embrace your current relationships"]];
;
// creates 2 random numbers to randomize the result of the function
let randNum1 = Math.floor(Math.random() * 3)
let randNum2 = Math.floor(Math.random() * 3)
// function that gives random number for time inserted in 24hr time
const userTimeAndMonth = (time,Month,day) =>{
    // makes sure all values are under the required amounts
    if(day < 31){
    if (Month >= 0 && Month <=12){
    if (time >= 0 && time <=24){
        console.log(signEval[randNum1][randNum2])
    }
    // returns a request for proper data if the data is above the threshold for the amounts
    }}else {
        console.log("please insert proper data")}}
userTimeAndMonth(1,11,22)