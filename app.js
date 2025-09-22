//Q1

// var age = prompt("Enter your age")

// if(age >= 18 ){
//     alert("You are an adult")
// }else {
//    alert ("You are Minor");
// }

//Q2

// var number = prompt("Enter a number:");

// if(number > 0){
//     console.log("Positive Number");
// }else{
//     console.log("Not Positive");
// }

//Q3

// var number = prompt("Enter a Number")

// if(number % 2 === 0){
//     alert("Even Number")
// }
// else{
//     alert("Odd Number")
// }

//Q4

// var username = prompt("Enter your Username")

// if( username === "admin"){
//     alert("Welocme Admin")
// }else{
//     alert("Acsess denied")
// }

//Q5

// var num1 = prompt("Enter the first number")
// var num2 = prompt("Enter the second number")

// if(num1 == num2){
//     console.log("Both Numbers are same");
// }else{
//     console.log(" The numbers are different")
// }

//Q6

// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");

// if(num1 > num2){
//     alert("First is larger");
// }else if(num2 > num1){
//     alert("Second is larger");
// }

//Q7

// var number = prompt("Enter a number")

// if(number >= 100 ){
//     alert("Too big!");
// }else{
//     alert("Within range")
// }

//Q8

// var score = prompt("Enter your score");

// if(score >= 50){
//     console.log("You Passed!");
// }else{
//     console.log("You Failed.");
// }

//Q9

// var temperature = prompt("Enter the temperature.");

// if(temperature > 30){
//     alert("Too hot!");
// }else{
//     alert("It's not hot")
// }

//Q10

// var number = prompt("Enter a number");

// if(number == 0){
//     alert("Zero");
// }else{
//     alert("Not zero.");
// }

//Q11

// var age =prompt("Enter your age");

// if(age >= "60"){
//     console.log("You are a senior citizen");
// }else{
//     console.log("You are not a senior.");
// }

//Q12

// var Username = prompt("Enter your name");

// if(Username === "Alice"){
//     alert("Hi, Alice!")
// }else{
//     alert("You are not Alice!")
// }

//Q13

// var password =prompt("Enter the password");

// if(password === "12345"){
//     console.log("Correct password");
// }else{
//     console.log("Wrong Passowrd");
// }

//Q14

// var time = prompt("Enter the current hour");

// if(time <= "12"){
//           alert("Good Morining!");
// }else{
//           alert("Good afternoon!");
// }

//Q15

// var number = prompt("Enter a number");
// if(number % 5 == "0"){
//           console.log("Divisible by 5");
// }else{
//           console.log("Not divisible by 5");
// }

//Q16

// var game = prompt("Want to play a game? (yes/no)");

// if (game === "yes"){
//   alert("Let's play!");
// }else{
//     alert("Maybe next time!");
// }

//Q17

// var color = prompt("Enter a color");
// if (color == "blue") {
//   console.log("Cool choice!");
// } else {
//   console.log("Interesting color!");
// }

//Q18

// var day = prompt("What's the day today");
// if(day == "sunday"){
//           alert("Weekend!");
// }else{
//           alert("Weekday");
// }

//Q19

// var fruit = prompt("Enter a fruit");

// if (fruit === "banana" || fruit === "apple") {
//   alert("We have that!");
// } else {
//   alert("Sorry, out of stock.");
// }

//Q20

// var start = prompt("Type start");

// if(start === "start"){
//           alert("Game started!");
// }else{
//  alert ("Waiting for input...")
// }

// Advanced JavaScript Conditional Logic Practice

// Q1

// var gradeMarks = 420;
// if (gradeMarks >= 80 && gradeMarks <= 100) {
//   console.log("Distinction");
// } else if (gradeMarks > 50 && gradeMarks <= 80) {
//   console.log("Pass!");
// } else if (gradeMarks < 50) {
//   console.log("Fail");
// } else {
//   console.log("Invalid marks");
// }

//Q2

// var age = 65;
// var membershipStatus = "premium member";

// if (age >= 60 && membershipStatus === "premium member") {
//   console.log("Senior Premium Discount");
// } else if (age >= 60) {
//   console.log("Senior Discount");
// } else if (membershipStatus === "premium member") {
//   console.log("Premium Discount");
// } else {
//   console.log("No Discount");
// }

// Q3

// var login = false;
// var email = false;

// if (login === true && email === true) {
//   console.log("Access Granted");
// } else if (login === true && email === false) {
//   console.log("Please verify your email");
// } else if (login === false && email === true) console.log("Please log in");
// else {
//   console.log("Please log in and verify your email");
// }

// Q4

// var age = 18;
// var country = "Pakistan"
// var ban = true

// if(age >= 18 && age <= 35 && (country === "Pakistan" || country ===  "India") && !ban){
//           console.log("Eligible")
// }else{
//       console.log("Not eligible")
// }

// Q5

// var login = true
// var plan = "free"

// if(plan == "premium" && login === true){
//     console.log("Welcome Premium User")
// }else if (plan === "free" && login === true){
//     console.log("Welcome Free User");
// }else if (login === false){
//     console.log("Please log in to continue");
// }else{
//     console.log("Invalid subscription")
// }

// Q6

// var price = "5000"
// var user = "member"
// var stock = true

// if(price > "1000" && stock === true && user == "member"){
//     console.log("Buy now with discount")
// }else if (price <= "1000" && price > 0 && stock === true){
//     console.log("Buy now")
// }else if (stock === false){
//     console.log("Out of stock")
// }else{
//     console.log("Invalid product")
// }

// Q7

// var hoursWorked = "0"
// var isWeekend = true

// if(hoursWorked > "40" && isWeekend === false){
//     console.log("Overtime")
// }else if(hoursWorked > "0" && hoursWorked < "40" && isWeekend === true){
//     console.log("Weekend work")
// }else if (hoursWorked <= "40" && hoursWorked < "0"){
//     console.log("Regular hours")
// }else if (hoursWorked === "0"){
// console.log("No work")
// }

// Q8

// var age = "20"
// var gender = "female"

// if( age >= "13" && age <= "19" && gender === "male"){
//     console.log("Teen Male")
// }else if(age >= "13" && age <= "19" && gender === "female"){
//     console.log(" female")
// }else if (age >= "20"){
//     console.log( "Adult")
// }else if (age < "13"){
//     console.log("Child")
// }

// Q9

// var temperature = "1000"
// var humidity = "1000"

// if(temperature >= "40" && humidity >= "60"){
//     console.log("Heatwave Alert")
// }else if(temperature >= "40" && humidity < "60"){
//     console.log("Hot and Dry")
// }else if(temperature <= "20"){
//     console.log("Cool Weather")
// }else{
//     console.log("Moderate")
// }

// Q10

// var score = 69

// if(score >= 90 && score <= 100){
//     console.log("Excellent")
// }else if(score >= 70 && score <= 89){
//     console.log("Good")
// }else if(score >= 50 && score <= 69){
//     console.log("Average")
// }else if(score >= 30 && score <= 49){
//     console.log("Poor")
// }else if( score >= 0 && score < 30){
//     console.log("Fail")
// }else{
//     console.log("Invalid score")
// }

// Q11

// var Login = true
// var enrollement = false
// var Ban = false

// if(!Login){
//     console.log("Please Log in")
// }else if(Ban){
//     console.log("User is banned")
// }else if(!enrollement){
//     console.log("Enroll in course first")
// }else{
//     console.log("Access granted")
// }

// Q12

// var speed = 200;
// var license = false;

// if(speed > 120){
//     console.log("License suspended");
// }else if (speed >= 100 && speed <= 120){
//     console.log("Warning");
// }else if (speed <=100 && license === true){
//     console.log("Normal driving");
// }else{
//     console.log("Driving without license");
// }

// Q13

// var payment = "failed";
// var shipped = true;

// if(payment == "complete" && shipped === true){
//     console.log("Order on the way");
// }else if(payment == "complete" && shipped === false){
//     console.log("Order on the way");
// }else if(payment == "pending"){
//     console.log("Awaiting payment")
// }else if (payment == "failed"){
//     console.log("Payment failed")
// }

// Q14

// var battery = 100;
// var charging = true;

// if(battery == 100){
//     console.log("Fully Charged")
// }else if(battery < 100 && charging == true){
//     console.log("Charging...")
// }else if(battery < 20 && charging == false){
//     console.log("Low Battery")
// }else{
//     console.log("Battery OK")
// }

// Q15

// var browser = "chrome"
// var device = "desktop"

// if (browser == "chrome" && device == "desktop"){
//     console.log("Full features enabled")
// }else if(browser == "chrome" && device == "mobile"){
//     console.log("Limited mobile features")
// }else{
//     console.log("Please switch to Chrome")
// }