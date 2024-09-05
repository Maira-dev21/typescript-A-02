"use strict";
//question no 1
//calculate age based on current year ?
var currentYear = 2023;
var birthYear = 2003;
var myAge = currentYear - birthYear;
console.log("Myage", myAge);
//question no 2 
// Calculate area of rectangle ?
//Area of Rectangle = length * width
//Example usage :
var length = 5;
var width = 6;
var areaOfRectangle = length * width;
console.log("Area of rectangle =", areaOfRectangle);
//question no 3 
// Calculate Area of Circle ?
// Area of Circle = MathPi * r**2
//Example usage 
var radius = 12;
var pie = 3.14;
var areaOfCircle = pie * radius ** 2;
console.log("Areaofcircle =", areaOfCircle, "metersquare");
//question no 4 
// Calculate Area of Cube ?
// Area of Cube = 6 * sideofcube**2
//Example usage 
var sideOfCube = 14;
var areaOfCube = 6 * sideOfCube ** 2;
console.log("areaofcube = ", areaOfCube);
//question no 5 
//create a program that converts a temperature from fahrenheit to celsius and vice versa
//formula
// fahrenheit to celcius = (fahrenheit - 32) * 5/9 
//Example usage 
var fahrenheit = 4;
var fahrenheitToCelcius = (fahrenheit - 32) * 5 / 9;
console.log("fahrenheit", fahrenheitToCelcius, "c");
//Celcius to Fahrenheit =  celcius * 9/5 + 32
//Example usage
var celcius = 7;
var celciusToFahrenheit = (celcius * 9 / 5) + 32;
console.log("celcius=", celciusToFahrenheit, "f");
//question no 6 
// convert a number of seconds into minutes and seconds using variables
//formula , // seconds into minutes = 1/60 minutes
var givenseconds = 345;
var minutesInGivenSeconds = Math.floor(givenseconds / 60);
var remainingseconds = (givenseconds % 60);
console.log(minutesInGivenSeconds, "min", givenseconds, "sec");
//question no 7 
// calculate the percentage 
// formula percentage = ( given value / total value * 100)
//Example usage 
var givenvalue = 8;
var totalvalue = 10;
var calculatepercentage = givenvalue / totalvalue * 100;
console.log("percentage is equal to ", calculatepercentage);
// question no 8 
// convert given number of days into weeks days 
//Example usage 
var givendays = 24;
var weeksInGivenDays = Math.floor(givendays / 7);
var remainingdays = givendays % 7;
console.log(weeksInGivenDays, "weeks", remainingdays, "days");
// Increment and Decrement Operator:
//Q1
var a = 2;
var b = ++a * 2;
// b?
//answer = 6
console.log(b);
//Q2
var x = 5;
var y = x-- + 2;
// y?
//answer = 7
console.log(y);
// Q3 
var x = 3;
var y = ++x + x++ + ++x;
// y?
//answer = 12
console.log(y);
// Q4 
var m = 2;
var n = ++m * m++ * --m;
// n?
// result = 12
console.log(n);
//Q5
var a = 3;
var b = 5;
var result = ++a + b-- - a++ + --b;
// result?
// result = 9
console.log(result);
//Q6
var m = 2;
var n = 4;
var p = m++ + ++n - --m + n--;
// m?,n?,p?
//result p = 11
console.log(m, n, p);
//Q7
var a = 5;
var b = 3;
var c = 2;
var d = 7;
var result = ++a * (b-- + c) / --d;
// result = 2
// a?, b?, c?, d? ,result?
console.log(a, b, c, d);
// Q8
var m = 2;
var n = 3;
var o = 4;
var result = m++ * (--n + m) / (o-- - n);
// m?, o?, n?, result?
// result = 3
console.log(m, n, o, result);
//class 03
//assignment operators =  + , - , * , /
var num6 = 65;
num6 -= 5;
console.log("num6", num6);
//comparison operators 
var num7 = 43;
var num8 = 76;
console.log(num7 == num8);
//returns a boolean 
// == compare a value only (true , false)
// === compare + data type 
// <= less than or equal ( Its true not check 2nd )
// >= greater than or equal 
// !=  compare value only (true , false ) 
// !== compare value only (true , false ) and data type
//logical operators 
//And &&
// Or ||    
var liscence = "learner";
var liscence = "driving";
var test2 = liscence == "learner" || liscence == "driving";
console.log("test2", test2);
// not !     
// string operators(combine)
var name5 = "maira";
var sentence = `my name is ${name5}`;
console.log(sentence);
