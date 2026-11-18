/*Q1. (EventEmitter & Event Loop)
Create a program for a school bell system. Use EventEmitter to create events like "classStart" and "classEnd" that print a message when triggered.
 Also add one setTimeout, one setImmediate, and one process.nextTick to show a "ring bell" message, and observe which one runs first.*/


const EventEmitter = require('events');

// Create an EventEmitter object
const schoolBell = new EventEmitter();

// Create classStart event
schoolBell.on("classStart", () => {
    console.log("Class Started! Students, please enter the classroom.");
});

// Create classEnd event
schoolBell.on("classEnd", () => {
    console.log("Class Ended! Students, you may leave.");
});

// Trigger events
schoolBell.emit("classStart");
schoolBell.emit("classEnd");

// Event Loop demonstration
console.log("School bell system is running...");

setTimeout(() => {
    console.log("Ring bell using setTimeout");
}, 0);

setImmediate(() => {
    console.log("Ring bell using setImmediate");
});

process.nextTick(() => {
    console.log("Ring bell using process.nextTick");
});

console.log("End of main program");
