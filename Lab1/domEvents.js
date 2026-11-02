import {EventEmitter}from "node:events";
function createDomEvents(){
    const emmiter=new EventEmitter();
    return{
        addEventListener(eventType,listner){
            emmiter.on(eventType,listner);
    },
    removeEventListener(eventType,listner){
        emmiter.off(eventType,listner);
    },
    dispatchEvent(event){
        emmiter.emit(event.eventType,event);
    }
    }
}
button.addEventListener('save',()=>{
    console.log("saving data...");
})
button.addEventListener('submit',()=>{
    console.log("data submitted...");
});
function handleClick(event){
    console.log("mouse clicked");
    console.log(event.eventType);
    console.log(message);
}
button.dispatchEvent({
    eventType:'save'
});