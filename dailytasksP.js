//// Pseudocode:
// Create input/output interface using readline
// input: data received from user (keyboard)
// output: data displayed to user (console)

const readline = require("readline");
const rl = readline.createInterface
({
  input: process.stdin,
  output: process.stdout
});
// 1.Value,Data Types & Operations -Intialize variable

let tasks = [];           // Building Array to store all task objects
let taskCount = 0;        // Intilize taskCount is 0.
const totalTasks = 5;     // Assign constant variable.
const pointsPerTask = 10; // Assign constant variablePoints awarded for each completed task.

// FUNCTION: askTask()
// Using a self-running function to repeatedly ask for tasks
function askTask() {
  
  //Ask user to enter the name of the task
  //String Charaters together -Template literal uses(backtick) and string interpolation used.
  rl.question(` Enter task ${taskCount + 1}: `, (taskText) => {

    // String Charaters together -Template literal uses(backtick) and string interpolation used.
    //Ask if the task is completed (yes/no)
    rl.question(`Is "${taskText}" completed? (yes/no): `, (status) => {

      //  String Charaters together-Common string method .toLowercase() used to convert the input to lowercase.
      let completed = status.toLowerCase() === "yes";

      // Control structures & Logic -Boolean expression - if condition used (Validate input: only "yes" or "no" allowed)
      if (status.toLowerCase() !== "yes" && status.toLowerCase() !== "no") {                 // if the answer is not yes and not no means it display warning message then call ask task () function.
        console.log("Warning ! Please enter 'yes' or 'no'!");
        return askTask(); // Re-ask the same task if input invalid
      }

      // Using Array(.push) -Store task as an object in tasks array.
      tasks.push({ text: taskText, completed: completed });   // creating object

      // Increment task counter
      taskCount++;

      //  Control structures & Logic-If else
      if (taskCount < totalTasks) {                       // if condition continues until totalTasks= 5.(if (1 < 5) it call askTask() else it display task summary)
        askTask(); 
      } else {
       
        console.log("\n--- Task Summary ---");           // output : console.log

        let completedCount = 0; // initializing a variable-Counter for completed tasks

        // Working with Loop
        // Building & Using Array: (forEach()) - Loop through all tasks to display and count completed ones.

        tasks.forEach((task, index) => {
          console.log(`${index + 1}. ${task.text} - ${task.completed ? "\u2705 Done" : "\u274C Not Done"}`);   //String Charaters together -unicode and string interpolation used.
          if (task.completed) completedCount++; // Conditional Statement :The if statement runs the code inside its block only if the condition is true.if its false increment operator - adds 1 to completed count.
        });

        // Value,Data Types & Operation -Initialize variable.Calculate total points earned
        let totalPoints = completedCount * pointsPerTask;

        // String Characters Together (\n used )Display points and completed task count
        console.log(`\nYou completed ${completedCount} out of ${totalTasks} tasks.`);    // console.log used to diplay output.
        console.log(`You earned ${totalPoints} points out of 50!`);

        // Value,Datatype & Operation (assignment operating === used to check complted count is extractly 5.
        //Control structures & Logic -Conditional Statement
        // Use unicode symbol for appreciation or inspiration for the uses.
        if (completedCount === totalTasks) {                                    //Conditional Statement if used to check (completedcount === 5)- true means all tasks completed 
          console.log(" \u{1F389} Excellent! You finished all your tasks!");    //Display encouraging message "Excellent"
                } else if (completedCount >= 3) {                               //Control structures & Logic -Conditional Statement else if and else.
          console.log(" \u{1F4AA} Good job! You Completed 3 tasks!");           // completed task is <=3 means it display "Good job! You Completed 3 tasks!"" else display "Keep going! You can do even better next time" 
        } else {
          console.log("Keep going! You can do even better next time!");
        }

        rl.close(); // End Program :Close input/output interface 
      }
    });
  });
}

askTask(); // Begin asking tasks
