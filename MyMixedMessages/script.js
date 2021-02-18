// nested array that holds all the random answers possible
let singEvalFire = [["you should watch your back","you will receive great happiness soon","keep your eyes open for oppurtunities"],["your next oppurtunity is right around the corner","love is right around the corner for you","when one door closes another opens keep your head up"],["A beautiful, smart, and loving person will be coming into your life","A faithful friend will soon be your strongest defense","embrace your current relationships"]];
;
let randSignNum = Math.floor(Math.random() * 3)
let randTimeNum = Math.floor(Math.random() * 3)
// function that gives random number for time inserted in 24hr time
const userTime = time =>{
    if (time >= 0 && time <=24){
        console.log(singEvalFire[randTimeNum][randSignNum])
    }
    else {
        return "please insert a proper hour"
    }
}
userTime(12)