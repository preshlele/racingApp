let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnerAge = 60;

// checks whether runner is an adult and registered early and adds 1000 to raceNumber if true
if (runnerAge > 18 && registeredEarly === true)
{
  raceNumber += 1000;
}
//checks the age and registration time to determine race time
if (runnerAge > 18 && registeredEarly === true){
  console.log(`Hello ${raceNumber} you will be racing at 9:30am`);
}
else if (runnerAge > 18 && registeredEarly === false){
  console.log(`Hello ${raceNumber} you will be racing at 11:00am`);
}
else if (runnerAge < 18){
  console.log(`Hello ${raceNumber} you will be racing at 12:30pm`);
}
else{
  console.log(`Go see the registration desk !`)
}
