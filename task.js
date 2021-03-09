// MAR 8 2021
// TASK MANAGER
const start = [
"displayTasks",
"addNewTask",
"removeTask",
"closeTaskManager"
]

let restart = true;
let taskManager;
let TASKS;
let NEW;
let REMOVE;
let CLOSE;
TASKS = [
   "Charge MacBook",
   "Master JavaScript"
];
let taskList;


while(restart){ 

taskManager = prompt(`TASK MANAGER

What would you like to do? (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The TASK MANAGER

`);

  if (taskManager == "TASKS") {
     taskList = "";
   for(taskOptions of TASKS){
      taskList += taskOptions + "\n";
   }  
   alert(taskList);
  } else if (taskManager == "NEW"){
  } else if  (taskManager == "REMOVE"){
} else if (taskManager == "CLOSE") {
   restart = false; 
   alert(`Thank you fur using Task Manager!`);
}

}


