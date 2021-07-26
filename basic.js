console.log("Hello from JS");

/* Data Types:
undefined, null= "nothing", booean, string, symbol, number and objects
*/
var myName = "Faiaz" // can be used in whole prgram
console.log(myName)

muName = 8 // changed it here

let outName = "hello" // only be used wiht in the scope where it is declare

const pi = 3.14 // variable which can't change
//-------------------------------------------------------------------
// Have to end all the line of JS code with semi clone
var a ;  // declearing a variable
var b = 2; // declearing and assigning a variable
console.log(a)

a = 7;
b = a;

console.log(a)
console.log("______end______")
//------------------------------------------------------------------
// Initializing these 3 variable
var a = 5;
var b = 10;
var c = "i am a string";

a = a + 1;
b = b + 5;
c = c + "string!"

//console.log(a)
//console.log(b)
//console.log(c)

//--------------------------------------------------------------------

// decleration
var studlyCapVar;
var properCamelCase;
var titelCaseOver;
// assignment
studlyCapVar = 10;
properCamelCase = " a string";
titleCaseOver = 9000;

//---------------------------------------------------------------------
var sum = 10 + 10;
console.log(sum);
var difference = 45 - 30;
console.log(difference);
var product = 8 * 10;
console.log(product);
var quotient = 66/6;
console.log(quotient);
console.log("______end______");
//_____________________________________________________________________
var myVar = 87;
 myVar++;
 console.log(myVar)// this "++" thing means "n + 1" called increment

 myVar--;
 console.log(myVar)// this "--" thing means "n - 1" called decriment

 //_____________________________________________________________________
// foating point number/floats

var aDecimal = 4.5;
var bDecimal = 5.5;

console.log(aDecimal*bDecimal);
console.log(aDecimal/bDecimal);
console.log("====");
var remainder;
remainder = 11 % 3;
console.log(remainder);

aDecimal+= 1;// "-+" does the smae thing, it substacts
console.log(aDecimal);
// "*=" multiplies "/=" divides

var aStr = `"i am \"\"\" noraml person"`
console.log(aStr);

/**** for sting
Code    output
\'      single quote
\"      double quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed

****/

var fkingString = " hello\n how are you \t i am faiaz"
console.log(fkingString);


var aName = "Faiaz";
//   here,   "01234" this is the index number

var aNameLength;
aNameLength = aName.length;// this is .length funciton in JS
console.log(aNameLength)
console.log(aName[0])// Like python

// individual characters ofa string literal can't be changed


//console.log(" Hello World!");
function wordBlanks(myNoun, myAdvective, myVerb, myAdverb){

    var result = "";
    result += "The " + myAdvective + " " + myNoun +" "+ myVerb + " to the store " + myAdverb

    return result;
  }

  console.log(wordBlanks("dog", "big", "ran", "quickly"));
  console.log("\n");
  console.log(wordBlanks("dog", "big", "ran", "quickly"));

  console.log("________end________\n")

  
