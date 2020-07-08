import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { todo } from './models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: todo[];
  constructor(private todoservice : TodoServiceService) { 

  }

  ngOnInit(): void {
    this.todos = this.todoservice.getTodos();

  }
  deleteTodo(todo){
    this.todos=this.todos.filter(t =>t.id !==todo.id);
  }

}
