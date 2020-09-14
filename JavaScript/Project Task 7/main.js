//setting my age in variable myAge
const myAge= 21
//setting earlyYears as 2 years
var earlyYears=2

earlyYears*=10.5
//subtracting 2 from myAge as it has already been used in earlyYears
var laterYears= myAge-2
//multiplying laterYearsby 4 to get dog years for (21-2) years
laterYears*=4
//adding earlyYears and laterYears to get final age in dog years
var myAgeInDogYears= earlyYears+laterYears
//saving my name in myName in lowercase
var myName= "Shreya".toLowerCase()
//display name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
