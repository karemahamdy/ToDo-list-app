let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

let taskArray = [];




// if it press on submit button 
submit.onclick = function ()  {
    if (input.value !== ""){
        addTaskToArray(input.value);
    }
    else {
        input.value = " " ; 
    }
}
// made a page element 
function  addtaskstopage(taskArray){
    tasksDiv.innerHTML = "";
    // looping on data array
    taskArray.forEach(task => {
    let div = document.createElement("div");
      div.className = "task";
      div.setAttribute("data-id", task.id);
      div.appendChild(document.createTextNode(task.title));
      console.log(div);
    });

}
// put data into array
function  addTaskToArray(taskText){
    // data in console
 const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
 };
 // add tasks to array
 taskArray.push(task);
 // add tasks on pages
 addtaskstopage(taskArray);
}