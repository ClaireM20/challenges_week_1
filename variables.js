//DAY 2 TASK 1 

let yourName = `claire`;
let yourAge = 47;
let yourFavcolour = `Blue`;
console.log (`My name is ${yourName}. I am ${yourAge} and my favourite colour is ${yourFavcolour}.`);

//DAY 2 TASK 2

let yourBreakfast = `cereal`;
let yourLunch = `sandwich`;
let yourDinner = `curry`;
console.log (`For breakfast I ate ${yourBreakfast}, for lunch I ate a ${yourLunch}, for dinner I ate ${yourDinner}.`);

//STRETCH
yourBreakfast = `toast`;
yourLunch =` soup`;
yourDinner =`spaghetti`


//DAY 2 TASK 3 
//calculate the number of days to your birthday from today. Found this on the internet but honestly is too advanced for me at this stage.

(function () {
    const
         day = hour * 24;
  
    let birthday = "Aug 24th, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "It's my birthday!";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());


// DAY 2 TASK 4 - create 9 variables 'x' and '0' insert

let spaceOne = `x`;
let spaceTwo = `o`;
let spaceThree = `x`;
let spaceFour = `o`;
let spaceFive = `x`;
let spaceSix = `o`;
let spaceSeven = `x`;
let spaceEight = `o`;
let spaceNine = `x`;


console.log(`      |       |`);
console.log(`  ${spaceOne}   |   ${spaceTwo}   |`);
console.log("      |       |");
console.log(`- - - - - - - - - - -`);
console.log(`      |       |`);
console.log(`  ${spaceThree}   |   ${spaceFive}   |`);
console.log("      |       |");
console.log(`      |       |`);
console.log(`- - - - - - - - - - -`);
console.log(`      |       |`);
console.log(`  ${spaceSeven}   |       |`);
console.log("      |       |");
console.log(`      |       |`);

// DAY 3
let age = 20
if(age > 17) {
    console.log("Yes I can serve you")
}
else{
    console.log("you aren't old enough")
}

let ageNew = 15
if(ageNew > 17) {
    console.log("Yes I can serve you")
}
else {
    console.log("you aren't old enough")
}

if (1 === "1") {
    console.log(true);
}
// === means if 1 is strictly equal to "1"
else { console.log(false);

}
if (1 != "1"){
    console.log(true);
}
// != means not equal to, so if 1 is not equal to "1" log true
else {
    console.log(false);
}

//if/else
let place = "Manc";
let weather = "cloudy";

if (place == "Manc" && weather == "Sunny") {
    console.log ("Check again");
}
else if (place == "Manc" && weather == "Rain") {
    console.log("Obvs");
}
else {
    console.log("What it isn't raining?");
}
let day = "thursday";
if (day == "saturday" || day == "Sunday" ){
    console.log("it's weekend!");
}
else{
    console.log("when's weekend?");
}

// Activity 2 Day 3  SWITCH easier to manage than lots of if/elses
let topping = "cheese";

switch(topping){
case "olives":
case "tomatoes":
case "cheese":
console.log("I like this ingredient for my pizza");
 break;
case "ham":
case "tuna":
case "anchovies":
console.log("I don't like these on my pizza");
 break;
case "pineapple":
console.log("I don't mind this on my pizza");
 break;
default:
    console.log("what sort of topping is that?!");
}


// ACTIVITY 3 DAY 3
// create a variable called password
// find out how many letters are in the password
// if there are less than eight log to the console that the password is too short.
// otherwise log the password to the console

let newPassword = "cake"

if (newPassword.length < 8) {
    console.log("your password is too short")
}
else {
   console.log (newPassword)
}

// ACTIVITY 4 DAY 2
// Create a variable called num
// If num is divisible by 3 log fizz if by 5 log buzz 
//if divisible by 3 and 5 log fiz buzz
// otherwise log number to the console
let num = 17
 if (num % 3 ==0) {
     console.log("fizz")
 }
 else if (num % 5 ==0) {
     console.log ("buzz")
 }
 else if (num % 3 ==0 && num% 5 == 0) {
     console.log ("fizzbuzz")
 }
 else {
     console.log(num)
 }