const todoList = [];
let answer = prompt("What would you like to do?");
while (answer !== "quit" && answer !== "q") {
  if (answer === "new") {
    const newTodo = prompt("Enter new todo");
    todoList.push(newTodo);
    console.log(`${newTodo} added to list`);
  } else if (answer === "list") {
    console.log("**********");
    for (let i=0; i < todoList.length; i++) {
      console.log(`${i}: ${todoList[i]}`);
    }
    console.log("**********");
  } else if (answer === "delete") {
    const index = parseInt(prompt("Enter index of todo to delete"));
    if (!Number.isNaN(index)) {
      const deleted = todoList.splice(index, 1);
      console.log(`Deleted ${deleted[0]}`);
    } else {
      console.log('Unknown Index');
    }
  }
  answer = prompt("What would you like to do?");
}