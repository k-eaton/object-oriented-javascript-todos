function TodoList(){
  this.tasks = [];
};

TodoList.prototype.add = function(task){
    this.tasks.push(task);
  };

TodoList.prototype.list = function(){
  for ( i = 1; i <= this.tasks.length; i++ ){
    console.log("id: " + i + ", description: " + this.tasks[i-1].name + ", completed: " + this.tasks[i-1].completed);
  };
};

TodoList.prototype.complete = function(id){
  this.tasks[id - 1].completed = true;
};

TodoList.prototype.remove = function(id){
  this.tasks.splice((id - 1), 1);
}

function Task(name){
  this.name = name;
};

Task.prototype.completed = false;

// ////////////////////////////////////////

var todo = new Todolist();

var kitchen = new Task("clean the kitchen");
var foyer = new Task("dust the foyer");
var bathroom = new Task("scrub the bathtub");

todo.add(kitchen);
todo.add(foyer);
todo.add(bathroom);

todo.list();

todo.complete(2);
todo.remove(3);

todo.list();


// ////////////////////////////////////////
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
breadTask.remove();

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

