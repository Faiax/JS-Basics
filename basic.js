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


// if statements
const f = false
const t = true

function TorF(isItTrue){
    if (isItTrue){
        return "Yes, it is true";
    }
    return "No, it is false";
}

console.log(TorF(f));

//________________________________________________
// == sign is the Equity operator
// "=" single equal sign is the assignment operator
function EqTest(val){
    if (val == 12){
        return "Equal";
    }
    return "Not Equal";
}

console.log(EqTest(12));

/*
 === is strict Equality Operator 
3===3 this is true
3==='3' this is false
does not do the typr operator
*/
console.log(3==='3');
console.log(3=='3');


// != this is inqeuality operator
// and !== is strict not equality

function GreatherThan(val){
    if (val>100){
        return "over 100";
    }

    if (val > 10){
        return "Over 10";
    }

    return "10 or less than under";
}
console.log(GreatherThan(10));

//________________________________________________

function testLogicalAnd(val){
    if(val<=50){
        if(val>=25){
            return "Yes";
        }
    }
    return "No";
}   

console.log(testLogicalAnd(10));

//easier way________________________________________

function testLogicalAnd2(val){
    if (val <=50 && val>=20){
        return "yes"
    }
    return "No"
}
console.log(testLogicalAnd2(10));

// else if statement________________________________

function testElseIf(val){
    if (val> 10){
        return "Greater than 10";
    }   else if (val < 5){
        return "Smaller than 5";
    }   else {
        return "Between 5 and 10";
    }

}
console.log(testElseIf(3))
console.log("_______________________________________\n")
//__________________________________________________

function testSize(num){
    if (num<5){
        return "tiny"
    }   else if (num<10){
        return "small"
    }   else if (num<15){
        return "Medium"
    }   else if (num<20){
        return "Large"
    }   else{
        return "HUGE"
    }
}
console.log(testSize(24));

//_____Switch_Statement______________________________

function caseInSwitch(val){
var answer = "";
switch(val){
    case 1:
        answer = "alpha";
        break;
    case 2:
        answer = "beta";
        break;
    case 3:
        answer = "gamma";
        break;
    case 4:
        answer = "delta";
        break;    
        
    }
    return answer;
}

console.log(caseInSwitch(4));

//_________________________________________________


function switchOfStuff(val){
    var answer = "";
    switch(val){
        case "a":
            answer = "Apple";
            break;
        case "b":
            answer = "Bird";
            break;
        case "c":
            answer = "Cat";
            break;
        case "d":
            answer = "Doll";
            break;
        default:
            answer = "stuff";
            break;
            
    }
        return answer;
}
    
console.log(switchOfStuff("r"))

//_______________________________________________
// Multiple Identical Options in switch statements

function suquentialSize(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer ="Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
        default:
            answer = "Very High"
            break;
    }
    return answer;
}


console.log(suquentialSize(20))

