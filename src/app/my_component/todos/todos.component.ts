import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor() { 
    const local=localStorage.getItem("todos");
    if(local==null)
    {
    this.todos=[];
    }
    else{
      this.todos= JSON.parse(local);
    }
  }

  ngOnInit(): void {
  }

  onDelete(todo:Todo){
    console.log(todo);
    const index= this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  onAddTodo(todo:Todo){
    this.todos.push(todo);
    console.log(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  onMarkDone(todo:Todo){
    const index= this.todos.indexOf(todo);
    this.todos[index].active= !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
