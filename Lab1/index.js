import EventEmmiter from "node:events";
const myEmmiter=new EventEmmiter();
myEmmiter.on("greet",(teacher)=>{
// call back function is ()=> { it is used to define the function  in another function as an argument}
console.log(`class started with teacher: ${teacher}`);
});
myEmmiter.on("exit",(teacher)=>{
    console.log(`class finished with teacher: ${teacher}`);
});
myEmmiter.emit("greet","Radha");
myEmmiter.emit("exit","Radha");
