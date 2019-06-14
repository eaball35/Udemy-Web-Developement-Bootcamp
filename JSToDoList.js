var toDos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit"){
  if (input === "list"){
    listToDos();
  } else if (input === "new"){
    listNew();
  } else if (input === "delete"){
    listDelete();
  }

input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app.");


function listToDos(){
console.log("*********");
  toDos.forEach(function(todo,i){
    console.log(i + ": " + todo);
  });
  console.log("*********");
}

function listNew(){
  var newToDo = prompt("What do you need to do?");
  toDos.push(newToDo);
  console.log("Added Todo");
}


function listDelete(){
  var index = prompt("Enter index of todo to delete:")
  toDos.splice(index,1);
  console.log("Delted Todo");
}
