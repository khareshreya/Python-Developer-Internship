let raceNumber = Math.floor(Math.random() * 1000);
let early= false;
let age=25;
if (age>18){
  raceNumber+=1000;
  }
if (age>18 && early===true){
  console.log(`You'll run at 9:30 AM with race number ${raceNumber}`);
}
else if (age>18 && early===false) {
  console.log(`You'll run at 11:00 AM with race number ${raceNumber}`);

}
else if (age<18){
  console.log(`You'll run at 12:00 AM with race number ${raceNumber}`);
}
else{
  console.log("See the registration desk for the race time");
}
