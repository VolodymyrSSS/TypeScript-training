console.log("Simple Task List project started!");

// Create the Task interface with id, title, and status
interface Task {
  id: number;
  title: string;
  status: "todo" | "in-progress" | "done";
}
// Create the task variables: firstTask, secondTask and thirdTask
let firstTask: Task = {
  id: 1,
  title: "Learn TypeScript interfaces",
  status: "todo",
};
let secondTask: Task = {
  id: 2,
  title: "Build task management app",
  status: "in-progress",
};
let thirdTask: Task = {
  id: 3,
  title: "Write unit tests",
  status: "done",
};

// Create the initial task list
let initialTasks: Task[] = [firstTask, secondTask];

// Create the getTaskInfo function
function getTaskInfo(task: Task): string {
  return `Task ${task.id}: ${task.title} - ${task.status}`;
}

/*
  Create a new task with a unique ID (use the length of the current array + 1).
  Set the title to the provided title parameter Set the status to 'todo' Return
  a new array containing all existing tasks plus the new task Create an initial
  task list by creating a variable named initialTasks of type Task[] containing
  firstTask and secondTask.
*/
function addTask(taskList: Task[], title: string): Task[] {
  let newTask: Task = {
    id: taskList.length + 1,
    title: title,
    status: "todo",
  };
  return [...taskList, newTask];
}

// Add a new task and store the result in a variable named updatedTasks
let updatedTasks = addTask(initialTasks, "Review code changes");

/* 
  Create a function named changeTaskStatus. Find the task with the matching
  ID in the task list Update that task's status to the new status Return a 
  new array with the updated task (do not modify the original array). If no 
  task with the given ID is found, return the original array unchanged.
*/
function changeTaskStatus(
  taskList: Task[],
  taskId: number,
  newStatus: "todo" | "in-progress" | "done",
): Task[] {
  return taskList.map((task) =>
    task.id === taskId ? { ...task, status: newStatus } : task,
  ); //
}
/*
  Alternative: with .find() method, you locate the task first, then update
  it. But you must still return a new array and not mutate the original like:
  function changeTaskStatus(taskList: Task[], taskId: number,
    newStatus: 'todo' | 'in-progress' | 'done'): Task[] {
    const found = taskList.find(t => t.id === taskId);
    if (!found) {
        return taskList; // no match, return unchanged
    }

    // create updated task
    const updatedTask: Task = { ...found, status: newStatus };

    // return new array with replacement
    return taskList.map(t => (t.id === taskId ? updatedTask : t));
  }
*/

/*
  Create a function named listTasksByStatus which return a new array 
  containing only tasks that match the specified status function. 
*/
function listTasksByStatus(
  taskList: Task[],
  status: "todo" | "in-progress" | "done",
): Task[] {
  return taskList.filter((task) => task.status === status);
}

// Create a function named printTaskSummary
function printTaskSummary(task: Task): void {
  console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`);
}

// Create a function named printAllTaskSummaries
function printAllTaskSummaries(taskList: Task[]): void {
  for (let task of taskList) {
    printTaskSummary(task);
  }
}

// Create a variable named testTasks
let testTasks: Task[] = [firstTask, secondTask, thirdTask];
// Create a variable named mixedTasks
let mixedTasks: Task[] = [firstTask, secondTask, thirdTask];

// Use your changeTaskStatus function
let progressTasks = changeTaskStatus(testTasks, 1, "in-progress");
let completedTasks = changeTaskStatus(progressTasks, 2, "done");
// Use your listTasksByStatus function
let todoTasks = listTasksByStatus(mixedTasks, "todo");
let inProgressTasks = listTasksByStatus(mixedTasks, "in-progress");
let doneTasks = listTasksByStatus(mixedTasks, "done");

let t1: Task = {
  id: 101,
  title: "Design user interface",
  status: "todo",
};
let t2: Task = {
  id: 102,
  title: "Implement authentication",
  status: "in-progress",
};
let t3: Task = {
  id: 103,
  title: "Deploy to production",
  status: "done",
};
let sampleTasks: Task[] = [t1, t2, t3];

// Print the required outputs
console.log(getTaskInfo(testTasks[0]));
console.log(getTaskInfo(progressTasks[0]));
console.log(getTaskInfo(completedTasks[1]));
console.log(testTasks[0].status);
console.log(completedTasks[1].status);

console.log(mixedTasks.length);
console.log(todoTasks.length);
console.log(inProgressTasks.length);
console.log(doneTasks.length);
console.log(getTaskInfo(todoTasks[0]));
console.log(getTaskInfo(inProgressTasks[0]));
console.log(getTaskInfo(doneTasks[0]));

printTaskSummary(firstTask);
printTaskSummary(sampleTasks[1]);
printAllTaskSummaries(sampleTasks);
printTaskSummary(doneTasks[doneTasks.length - 1]);
