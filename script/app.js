                  // Assignment 03 JAVASCRIPT
                  // TASK O1

// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".

// var zakatPercentage = 0.025;
// var userInput = Number(+prompt("Enter your total savings"));
// var result = zakatPercentage * userInput;
// alert("Your zakat Amount is " + result);

              // TASK 02
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

// var FamilyMembers = prompt("Enter the Total number of Family Members:");
// var FitrahMethod = prompt("Choose a Fitrah Method: 1. gandum = 250Rs 2. jou = 450Rs 3. khajoor = 2100Rs 4. kishmish = 2800Rs");
// var Fitrahprice;
// if (FitrahMethod === "gandum" || 
// FitrahMethod === "1")
//  {
//     FitrahAmount = 250;
// }
// else if (FitrahMethod === "jou" ||
//  FitrahMethod === "2") 
//  {
//     FitrahAmount = 450;
// }
// else if (FitrahMethod === "khajoor" ||
//  FitrahMethod === "3") 
//  {
//     FitrahAmount = 2100;
// }
// else if (FitrahMethod === "kishmish" ||
//  FitrahMethod === "4")
// {
//     FitrahAmount = 2800;
// }
//   else { alert("Please Choose the correct method given Above")
// }
// var Fitrahprice = FitrahAmount * FamilyMembers;
// alert("The Fitrah Amount for " + FamilyMembers + " Family Members by " + FitrahMethod + " Method is Rs " + Fitrahprice);

            // TASK 3

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.


// var secretNumber = Number(+prompt("Guess the Secret Number between 1 to 10"));
// if (secretNumber === 4) {
//     alert("CONGRATULATIONS you guess the correct Number");
// }
// else if (secretNumber <= 4) {
//     alert("Your Number is too low , guess Again!");
// }
// else if (secretNumber >= 4) {
//     alert("Your Number is too high , guess Again!");
// }
// else {
//     alert("Oops, Try Again")
// }



                    // TASK 4

// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).


// var userName = prompt('Enter Your Name');
// var uppperCase = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
// alert(uppperCase);

                // TASK 5

// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.


// var contactNumbers = []
// var contactNames = []
// for (var i =0 ;   i<3 ; i++)
// {
//     var CNo = prompt("Enter Your Number")
//     var CName =prompt("Enter Your Name")

// contactNumbers.push(CNo)
// contactNames.push(CName)
// }
// for (var i = 0; i<3 ; i++)
// console.log(contactNumbers)
// console.log(contactNames)

               // TASK 6

// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.


// var items = ["pizza", "burger", "french fries", "cold drink", "ice-cream"];

// console.log(items);
// var userInput = + prompt("Which food position you want to change? 0. pizza 1. burger 2. french fries 3. cold drink");
// var removeitem = items.splice(userInput, 1);
// var left = ("remaining items is 8")
// console.log("The removed item is:" + removeitem);
// console.log(`The remaining items are: ${items}`);
// console.log(`Total items remaining: ${items.length}`);



       // TASK 7

// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.


// var nationality = prompt("Enter Your Nationality")

// if (nationality == 'pakistani' || nationality == 'Pakistani') {
//     var gender = prompt("Enter Your Gender");
//     if (gender === "Male", "Female") { var age = prompt("Enter Your Age") }
//     if (age >= 18) { alert("You are eligible to vote") }
//     if (age <= 18) { alert("You are not eligible to vote") }
// }

// if (nationality == 'Indian' || nationality == 'Indian') {
//     var gender = prompt("Enter Your Gender");
//     if (gender === "Male", "Female") { var age = prompt("Enter Your Age") }
//     if (age >= 18) { alert("You're eligible to vote") }
//     if (age <= 18) { alert("You're not eligible to vote") }
// }
// else { alert("You're not eligible to vote") }




          // TASK 8

// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)



// var WorldcupSquad = ["Afridi", "Shoaib", "Naseem", 'Iftikhar', "Sarfaraz", "Haris", "Hassan", "Wahab", "Hafeez","Hasnain", "Asif","Amir", "Imad","Fakhar","Babar"]

// var finalPlayers= WorldcupSquad.slice(0,11)
//  console.log(WorldcupSquad)
//  console.log(finalPlayers)
