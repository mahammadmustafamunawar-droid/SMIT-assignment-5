// Q1------?
console.log("Welcome to my website")
alert("Welcome to my website")


// Q2------?
var firstname="Shahzaibshk"
console.log(firstname)


// Q3------?
console.log(20 + 10)

// Q4------?
  // 5 legal Variables // these are allowed in js (letters"a-z", numbers(like"shah23" not "23shah"),special-character="$" "," "_")
    var na,me;
    var $price;
    var user_name;
    var _age;
    var total5;

    // 5 illegal Variables // these are not allowed in js (space,numbers before letters, these special characters are not allowed in js)
   // var user name;
   // var 5total;
   // var #age;
   // var per-cent;
    // var user&name;


// Q5------?
console.log(10 + 10)
console.log(50 - 10)
console.log(50 * 3)
console.log(30/10)


// Q6-------?
var num= + prompt("Enter any digit")
if(num%2==0){
    console.log("This is even number")
}
else
    console.log("This is odd number")


// Q6 (b)-------?
var counter= 20
console.log(++counter)
console.log(counter++)

var counter=20
console.log(--counter)
console.log(counter--)

// Q7------------?
var userName= prompt("firstname + lastname")
console.log(userName)


// Q8------------?
var name= prompt("Enter your Fav color")
console.log(name)


// Q9------------?
var num= + prompt("enter any number")
if(num >=10){
    console.log("true")
}
else
    console.log("false")


// Q10-----------?
var a=5
var b="5"
console.log(a == b)  // this is check only value.

var a=5
var b="5"
console.log(a === b) // this is check both: values and type.


// Q11-----------?
var findGrade=+prompt("Enter your percentage")
if(findGrade >=80){
    alert("Congratulation! Your garde is A")
}
else if(findGrade >=60){
    alert("Congratulation! Your grade is B")
}
else if(findGrade >=40){
    alert("Congratulation! Your grade is C")
}
else 
    alert("You are Fail! Better luck for next time")

// Bonus Task //
 var number1=+prompt("Enter first number")
 var operator=prompt("Choose operator like: +,-,*,/,%")
 var number2=+prompt("Enter last number")
 switch(operator){
    case "+":
        console.log(number1 + number2)
    break
    case "-":
        console.log(number1 - number2) 
    break
    case "*":
        console.log(number1 * number2)
    break
    case "/":
        console.log(number1 / number2)  
    break
    case "%":
        console.log(number1 % number2)  
    break    
    default:
        alert("Invalid Instruction")                     
 }
var counter= 20
console.log(++counter)
console.log(counter++)

var counter=20
console.log(--counter)
console.log(counter--)

// Q7------------?
var userName= prompt("firstname + lastname")
console.log(userName)


// Q8------------?
var name= prompt("Enter your Fav color")
console.log(name)


// Q9------------?
var num= + prompt("enter any number")
if(num >=10){
    console.log("true")
}
else
    console.log("false")


// Q10-----------?
var a=5
var b="5"
console.log(a == b)  // this is check only value.

var a=5
var b="5"
console.log(a === b) // this is check both: values and type.


// Q11-----------?
var findGrade=+prompt("Enter your percentage")
if(findGrade >=80){
    alert("Congratulation! Your garde is A")
}
else if(findGrade >=60){
    alert("Congratulation! Your grade is B")
}
else if(findGrade >=40){
    alert("Congratulation! Your grade is C")
}
else 
    alert("You are Fail! Better luck for next time")

// Bonus Task //
 var number1=+prompt("Enter first number")
 var operator=prompt("Choose operator like: +,-,*,/,%")
 var number2=+prompt("Enter last number")
 switch(operator){
    case "+":
        console.log(number1 + number2)
    break
    case "-":
        console.log(number1 - number2) 
    break
    case "*":
        console.log(number1 * number2)
    break
    case "/":
        console.log(number1 / number2)  
    break
    case "%":
        console.log(number1 % number2)  
    break    
    default:
        alert("Invalid Instruction")                     
 }