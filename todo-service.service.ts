import { Injectable } from '@angular/core';
import { todo } from './todo/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }

  getTodos(){
    return[{
      
        id: 1,
        title: "todolist one",
        completed: false
      },
      {
        id: 2,
        title: "todolist two",
        completed: true
      },
      {
        id: 3,
        title: "todolist three",
        completed: false
      },
      {
        id: 4,
        title: "todolist four",
        completed: true
      }
    ]
   }
 deletetodo(todo){
   var todos = this.getTodos();
   return todos.filter(t => t.id !== todo.id);
 }
}
