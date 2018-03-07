// Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,
// red blue where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolons!

/*
 * Programming Quiz: Semicolons! (2-8)
 */

var thingOne = "red";
var thingTwo = "blue";
console.log(thingOne + thingTwo);


// Programming Quiz: What's my Name? (2-9)


// Directions: Create a variable called fullName and assign it your full name as a string.
 
var fullName = "Christina Marie Van Nostrand Kopecky";
console.log (fullName);


/*
 * Programming Quiz: Out to Dinner (2-10)
 */
// Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the 
// calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the 
// result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it 
// into a variable called total.

// Print the total to the JavaScript console.

// Hint: 15% in decimal form is written as 0.15.


var bill = (10.25 +3.99+7.15);
var tip = bill*.15;
var total = bill + tip;
console.log('$'+total.toFixed(2));

//Programming Quiz: MadLibs 2-11
// Directions:
// Mad Libs is a word game where players have fun substituting words for blanks in a story. For this exercise, use the adjective variables below to fill in the blanks and complete the following message.

// "The Intro to JavaScript course is __________. James and Julia are so __________. I cannot wait to work through the rest of this __________ content!"
// var adjective1 = "amazing";
// var adjective2 = "fun";
// var adjective3 = "entertaining";
// Assign the resulting string to a variable called madLib.


var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

var madLib = 'The Intro to JavaScript course is '+adjective1+'. James and Julia are so '+adjective2+'. I cannot wait to work through the rest of this '+adjective3+' content!';
console.log (madLib);

/*
 * Programming Quiz: One Awesome Message (2-12)
 *
 * 1. Create the variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and, using string concatenation 
      and the variables above, create an awesome message.
 * 3. Print the awesomeMessage variable to the console.
 */
 
/*
 * Notes:
 * - Using the above as an example, firstName would have been assigned to
 *   "Julia", interest to "cats", and hobby to "play video games".
 * - Be sure to include spaces and periods where necessary!
 */

var firstName = "Christina";
var interest = "cats";
var hobby = "play my flute";

var awesomeMessage ="Hi, my name is "+firstName+". I love "+interest+". In my spare time, I like to "+hobby+".";
console.log (awesomeMessage);

/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 3;

if (number%2===0) {
    console.log('even');
} else {
    console.log ('odd');

}

/*
 * Programming Quiz: Musical Groups (3-3)
prints "not a group" if musicians is less than or equal to 0
prints "solo" if musicians is equal to 1
prints "duet" if musicians is equal to 2
prints "trio" if musicians is equal to 3
prints "quartet" if musicians is equal to 4
prints "this is a large group" if musicians is greater than 4
 */

// change the value of `musicians` to test your conditional statements
var musicians = 0;

if (musicians>4){
    console.log('this is a large group');
}
else if (musicians == 4){
    console.log("quartet");
}
else if (musicians == 3){
    console.log("trio");
}
else if (musicians == 2){
    console.log("duet");
}
else if (musicians == 1){
    console.log("solo");
}
else{
    console.log("not a group");
}

//Programming quiz 3-4 - fictitious murder mystery
// change the value of `room` and `suspect` to test your code
var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

if (room === "gallery") {
    weapon = "trophy";
      if (suspect === "Ms. Van Cleve") {
      solved = true; 
    }
} else if (room === "ballroom") {
    weapon = "poison"; 
        if (suspect === "Mr. Kalehoff") {
        solved = true;
        }
} else if (room === "billiards room") {
    weapon = "pool stick";
        if (suspect === "Mrs. Sparr") {
        solved = true;
        }
} else {
    weapon = "knife";
      if (suspect === "Mr. Parkes") {
      solved = true;
      }
}
if (solved) {
	console.log(suspect +" did it in the "+ room + " with the "+ weapon +"!");
}

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 0;
var checkBalance = true;
var isActive = true;

// your code goes here

if (checkBalance === true) {
  if ((balance > 0) && (isActive === true)) {
    console.log("Your balance is $" + balance.toFixed(2)+".");
  }
  else if (isActive === false) {
    console.log("Your account is no longer active."); 
  }
  else if (balance === 0) {
    console.log("Your account is empty.");
  }
  else {
    console.log("Your balance is negative. Please contact bank.");
  }
}
else {
  console.log("Thank you. Have a nice day!");
}

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "chocolate";
var vessel = "cone";
var toppings = "sprinkles";



if ((flavor === "vanilla"||flavor === "chocolate") && (vessel ==="cone"||vessel==="bowl") &&
    (toppings==="sprinkles"||toppings==="peanuts")){
            console.log ("I\'d like two scoops of "+flavor+" ice cream in a "+ vessel+" with "+toppings+".");}



/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 0;
var shirtLength = 0;
var shirtSleeve = 0;
if((shirtWidth <= 18) && (shirtLength <= 28) && (shirtSleeve <= 8.13)) {
  console.log("S");
} 
else if((shirtWidth <= 20 && shirtWidth > 18) && (shirtLength <= 29 && shirtLength > 28) && (shirtSleeve <= 8.38 && shirtSleeve > 8.13)) {
  console.log("M");
} 
else if((shirtWidth <= 22 && shirtWidth > 20) && (shirtLength <= 30 && shirtLength > 29) && (shirtSleeve <= 8.63 && shirtSleeve > 8.38)) {
  console.log("L");
}
else if((shirtWidth <= 24 && shirtWidth > 22) && (shirtLength <= 31 && shirtLength > 30) && (shirtSleeve <= 8.88 && shirtSleeve > 8.63)) {
  console.log("XL");
}
else if((shirtWidth <= 26 && shirtWidth > 24) && (shirtLength <= 33 && shirtLength > 31) && (shirtSleeve <= 9.63 && shirtSleeve > 8.88)) {
  console.log("2XL");
} 
else if((shirtWidth <= 28 && shirtWidth > 26) && (shirtLength <= 34 && shirtLength > 33) && (shirtSleeve <= 10.13 && shirtSleeve > 9.63)) {
  console.log("3XL");
} 
else {
    console.log("N/A");
}  

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = true;
var eatsAnimals = false;

var category = eatsPlants&&eatsAnimals? "omnivore":eatsPlants? "herbivore": eatsAnimals? "carnivore":undefined;

console.log(category);

/*
 * Programming Quiz: Back to School (3-9)
 */
//education is the object of the switch statement and the salarty will be the output
// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary;

switch(education){
    case "no high school diploma":
      salary = "$"+25+','+636;
      console.log ('In 2015, a person with '+education+' earned an average of '+ salary+'/year.');
      break;
    case "a high school diploma":
      salary = "$"+35+','+256;
      console.log ('In 2015, a person with '+education+' earned an average of '+ salary+'/year.');
      break;
    case "an Associate's degree":
      salary = "$"+41+','+496;
      console.log ('In 2015, a person with '+education+' earned an average of '+ salary+'/year.');
      break;
    case "a Bachelor's degree":
      salary = "$"+59+','+124;
      console.log ('In 2015, a person with '+education+' earned an average of '+ salary+'/year.');
      break;
    case "a Master's degree":
      salary = "$"+69+','+732;
      console.log ('In 2015, a person with '+education+' earned an average of '+ salary+'/year.');
      break;
    case "a Professional degree":
      salary = "$"+89+','+960;
      console.log ('In 2015, a person with '+education+' earned an average of '+ salary+'/year.');
      break;
    case "a Doctoral degree":
      salary = "$"+84+','+396;
      console.log ('In 2015, a person with '+education+' earned an average of '+ salary+'/year.');
      break;
}

/*
 * Programming Quiz: Changing the Loop (4-4)
 */

// rewrite the while loop as a for loop
// var x = 9;
// while (x >= 1) {
//     console.log("hello " + x);
//     x = x - 1;
// }
for(let x=9;x>=1;x--){
    console.log("hello "+ x);
}

/*
//  * Programming Quiz: Fix the Error 1 (4-5)
//  */
//  for (x < 10; x++) {
//   console.log(x);
// }

// fix the for loop
for (let x=5; x < 10; x++) {
    console.log(x);
}

/*
 * Programming Quiz: Fix the Error 2 (4-6)
 */

// fix the for loop
//for (var k = 0 k < 200 k++) {
//  console.log(k);
//}
for (var k = 0; k < 200; k++) {
    console.log(k);
}

/*
 * Programming Quiz: Factorials (4-7)
 */
 
let solution =1;
for (let inputNumber =1; inputNumber<=12;inputNumber++){
   solution *=inputNumber;
}
console.log(solution);

/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

for (let x = 0; x<26;x++){
    for(let y = 0; y<100;y++){
       console.log(x+'-'+y);
    }
  }

  /*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

function laugh(){
    return "hahahahahahahahahaha!";
}

console.log(laugh());

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * 
 Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */
function laugh(num){
    let ha="";
      for (let i = 0;i<num;i++){
        ha+= "ha";
        }
        return ha+"!";
    }
    
    console.log(laugh(3));
    
    
/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
function buildTriangle(width){
    var triangle = '';
    for (i=1;i<=width;i++){
    triangle += (makeLine(i));
    // console.log (triangle);
    }
    return triangle;
}



// test your code by uncommenting the following line
console.log(buildTriangle(10));


/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function (num){
    let ha='';
    for (let i = 0;i<num;i++){
    ha+= "ha";
    }
    return ha+"!";
};


console.log(laugh(10));


/*
 * Programming Quiz: Cry (5-5)
 */

var x= function cry(boohoo){
    return boohoo+ '!';
};
{
return x;
}
cry(boohoo);

/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
emotions("happy", function laugh(num){
    var ha = ""; 
    for (x = 0; x < num; x++){ 
        ha += "ha";
    }  
    return ha + "!";
});

/*
 * Programming Quiz: UdaciFamily (6-1)
 */

var udaciFamily = ["Julia", "James", "Christina"];
console.log (udaciFamily);

/*
 * Programming Quiz: Building the Crew (6-2)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log (crew);

/*
 * Programming Quiz: The Price is Right (6-3)
 */

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0]=2.25;
prices[2]=100.65;
prices[6]=2.25;
console.log (prices);

/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(-2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");
console.log (rainbow);


/*
 * Programming Quiz: Quidditch Cup (6-5)
 */


var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(team){
    var teamLength = team.length;
    if(teamLength >= 7){
        return true;
    }else{
        return false;
    }
}
console.log(hasEnoughPlayers(team));


/*
 * Programming Quiz: Joining the Crew (6-6)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push (doctor, sister, shepherd);
console.log (crew);


/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(num, index, array){
  if(num % 3 === 0){
    array[index] = num += 100; 
  }

});

console.log(test);

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(num){
    num = Number(((num * 0.15)+num).toFixed(2));
    return num;
});
console.log (totals);

/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

    for(var row = 0; row < numbers.length; row++){
    for(var column = 0; column < numbers[row].length; column++){
        numbers[row][column] = numbers[row][column] % 2 === 0 ? "even" : "odd";
      }
}
console.log(numbers);

//Programming Quiz 7-1
var umbrella = {
    color: "pink",
    isOpen: false,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    isClose: true,
    close: function () {
      if (umbrella.isClosed === true) {
        return "The umbrella is already closed!"; 
      }else {
        umbrella.isClosed = true; 
        umbrella.isOpen = false; 
        return "Julia closes the umbrella"; 
      }
    },
};

/*
 * Programming Quiz: Menu Items (7-2)
 */

let breakfast = {
    name: "The Lumberjack",
    price: 9.95,
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
};
console.log (breakfast);

/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function print(balance, interestRatePercent){
        return "Welcome!\nYour balance is currently $"+ savingsAccount.balance+ " and your interest rate is "+ savingsAccount.interestRatePercent+"%.";
    }
};

console.log(savingsAccount.printAccountSummary());


/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = {
    name: "Christina",
    friends: 423,
    messages: ["Hi! How are you?", "Happy Birthday!", "Congratulations!"],
    postMessage: function postMessage(message){
        var newMessage = '';
        facebookProfile.messages.push(newMessage);
        return facebookProfile.messages;
    },
    deleteMessage: function deleteMessage(index){
        facebookProfile.messages.splice(index, 1);
        return facebookProfile.messages;
    },
    addFriend: function addFriend(){
        facebookProfile.friends=facebookProfile.friends+1;
        return facebookProfile.friends;
    },
    removeFriend: function removeFriend(){
        facebookProfile.friends = facebookProfile.friends -1;
        return facebookProfile.friends;
    }
    };
    console.log(facebookProfile);

    /*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donuts) {
  console.log(donuts.type +" donuts cost $"+ donuts.cost + " each");
});

    
    